"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionOrchestrator = void 0;
const distributed_transaction_1 = require("./distributed-transaction");
const transaction_step_1 = require("./transaction-step");
const types_1 = require("./types");
const events_1 = require("events");
const utils_1 = require("@medusajs/utils");
/**
 * @class TransactionOrchestrator is responsible for managing and executing distributed transactions.
 * It is based on a single transaction definition, which is used to execute all the transaction steps
 */
class TransactionOrchestrator extends events_1.EventEmitter {
    constructor(id, definition) {
        super();
        this.id = id;
        this.definition = definition;
        this.invokeSteps = [];
        this.compensateSteps = [];
    }
    static getKeyName(...params) {
        return params.join(this.SEPARATOR);
    }
    getPreviousStep(flow, step) {
        const id = step.id.split(".");
        id.pop();
        const parentId = id.join(".");
        return flow.steps[parentId];
    }
    getInvokeSteps(flow) {
        if (this.invokeSteps.length) {
            return this.invokeSteps;
        }
        const steps = Object.keys(flow.steps);
        steps.sort((a, b) => flow.steps[a].depth - flow.steps[b].depth);
        this.invokeSteps = steps;
        return steps;
    }
    getCompensationSteps(flow) {
        if (this.compensateSteps.length) {
            return this.compensateSteps;
        }
        const steps = Object.keys(flow.steps);
        steps.sort((a, b) => (flow.steps[b].depth || 0) - (flow.steps[a].depth || 0));
        this.compensateSteps = steps;
        return steps;
    }
    canMoveForward(flow, previousStep) {
        const states = [
            types_1.TransactionState.DONE,
            types_1.TransactionState.FAILED,
            types_1.TransactionState.SKIPPED,
        ];
        const siblings = this.getPreviousStep(flow, previousStep).next.map((sib) => flow.steps[sib]);
        return (!!previousStep.definition.noWait ||
            siblings.every((sib) => states.includes(sib.invoke.state)));
    }
    canMoveBackward(flow, step) {
        const states = [
            types_1.TransactionState.DONE,
            types_1.TransactionState.REVERTED,
            types_1.TransactionState.FAILED,
            types_1.TransactionState.DORMANT,
        ];
        const siblings = step.next.map((sib) => flow.steps[sib]);
        return (siblings.length === 0 ||
            siblings.every((sib) => states.includes(sib.compensate.state)));
    }
    canContinue(flow, step) {
        if (flow.state == types_1.TransactionState.COMPENSATING) {
            return this.canMoveBackward(flow, step);
        }
        else {
            const previous = this.getPreviousStep(flow, step);
            if (previous.id === TransactionOrchestrator.ROOT_STEP) {
                return true;
            }
            return this.canMoveForward(flow, previous);
        }
    }
    checkAllSteps(transaction) {
        let hasSkipped = false;
        let hasIgnoredFailure = false;
        let hasFailed = false;
        let hasWaiting = false;
        let hasReverted = false;
        let completedSteps = 0;
        const flow = transaction.getFlow();
        const nextSteps = [];
        const allSteps = flow.state === types_1.TransactionState.COMPENSATING
            ? this.getCompensationSteps(flow)
            : this.getInvokeSteps(flow);
        for (const step of allSteps) {
            if (step === TransactionOrchestrator.ROOT_STEP ||
                !this.canContinue(flow, flow.steps[step])) {
                continue;
            }
            const stepDef = flow.steps[step];
            const curState = stepDef.getStates();
            if (curState.status === types_1.TransactionStepStatus.WAITING) {
                hasWaiting = true;
                if (stepDef.canRetry()) {
                    nextSteps.push(stepDef);
                }
                continue;
            }
            if (stepDef.canInvoke(flow.state) || stepDef.canCompensate(flow.state)) {
                nextSteps.push(stepDef);
            }
            else {
                completedSteps++;
                if (curState.state === types_1.TransactionState.SKIPPED) {
                    hasSkipped = true;
                }
                else if (curState.state === types_1.TransactionState.REVERTED) {
                    hasReverted = true;
                }
                else if (curState.state === types_1.TransactionState.FAILED) {
                    if (stepDef.definition.continueOnPermanentFailure) {
                        hasIgnoredFailure = true;
                    }
                    else {
                        hasFailed = true;
                    }
                }
            }
        }
        const totalSteps = allSteps.length - 1;
        if (flow.state === types_1.TransactionState.WAITING_TO_COMPENSATE &&
            nextSteps.length === 0 &&
            !hasWaiting) {
            flow.state = types_1.TransactionState.COMPENSATING;
            this.flagStepsToRevert(flow);
            this.emit("compensate", transaction);
            return this.checkAllSteps(transaction);
        }
        else if (completedSteps === totalSteps) {
            if (hasSkipped) {
                flow.hasSkippedSteps = true;
            }
            if (hasIgnoredFailure) {
                flow.hasFailedSteps = true;
            }
            if (hasFailed) {
                flow.state = types_1.TransactionState.FAILED;
            }
            else {
                flow.state = hasReverted
                    ? types_1.TransactionState.REVERTED
                    : types_1.TransactionState.DONE;
            }
            this.emit("finish", transaction);
            // TODO: check TransactionModel if it should delete the checkpoint when the transaction is done
            void transaction.deleteCheckpoint();
        }
        return {
            next: nextSteps,
            total: totalSteps,
            remaining: totalSteps - completedSteps,
            completed: completedSteps,
        };
    }
    flagStepsToRevert(flow) {
        for (const step in flow.steps) {
            if (step === TransactionOrchestrator.ROOT_STEP) {
                continue;
            }
            const stepDef = flow.steps[step];
            const curState = stepDef.getStates();
            if (curState.state === types_1.TransactionState.DONE ||
                curState.status === types_1.TransactionStepStatus.PERMANENT_FAILURE) {
                stepDef.beginCompensation();
                stepDef.changeState(types_1.TransactionState.NOT_STARTED);
            }
        }
    }
    static async setStepSuccess(transaction, step, response) {
        if (step.saveResponse) {
            transaction.addResponse(step.definition.action, step.isCompensating()
                ? types_1.TransactionHandlerType.COMPENSATE
                : types_1.TransactionHandlerType.INVOKE, response);
        }
        step.changeStatus(types_1.TransactionStepStatus.OK);
        if (step.isCompensating()) {
            step.changeState(types_1.TransactionState.REVERTED);
        }
        else {
            step.changeState(types_1.TransactionState.DONE);
        }
        if (step.definition.async) {
            await transaction.saveCheckpoint();
        }
    }
    static async setStepFailure(transaction, step, error, maxRetries = TransactionOrchestrator.DEFAULT_RETRIES) {
        step.failures++;
        step.changeStatus(types_1.TransactionStepStatus.TEMPORARY_FAILURE);
        if (step.failures > maxRetries) {
            step.changeState(types_1.TransactionState.FAILED);
            step.changeStatus(types_1.TransactionStepStatus.PERMANENT_FAILURE);
            transaction.addError(step.definition.action, step.isCompensating()
                ? types_1.TransactionHandlerType.COMPENSATE
                : types_1.TransactionHandlerType.INVOKE, error);
            if (!step.isCompensating()) {
                const flow = transaction.getFlow();
                if (step.definition.continueOnPermanentFailure) {
                    for (const childStep of step.next) {
                        const child = flow.steps[childStep];
                        child.changeState(types_1.TransactionState.SKIPPED);
                    }
                }
                else {
                    flow.state = types_1.TransactionState.WAITING_TO_COMPENSATE;
                }
            }
        }
        if (step.definition.async) {
            await transaction.saveCheckpoint();
        }
    }
    async executeNext(transaction) {
        if (transaction.hasFinished()) {
            return;
        }
        const flow = transaction.getFlow();
        const nextSteps = this.checkAllSteps(transaction);
        const execution = [];
        for (const step of nextSteps.next) {
            const curState = step.getStates();
            const type = step.isCompensating()
                ? types_1.TransactionHandlerType.COMPENSATE
                : types_1.TransactionHandlerType.INVOKE;
            step.lastAttempt = Date.now();
            step.attempts++;
            if (curState.state === types_1.TransactionState.NOT_STARTED) {
                if (step.isCompensating()) {
                    step.changeState(types_1.TransactionState.COMPENSATING);
                    if (step.definition.noCompensation) {
                        step.changeState(types_1.TransactionState.REVERTED);
                        continue;
                    }
                }
                else if (flow.state === types_1.TransactionState.INVOKING) {
                    step.changeState(types_1.TransactionState.INVOKING);
                }
            }
            step.changeStatus(types_1.TransactionStepStatus.WAITING);
            const payload = new distributed_transaction_1.TransactionPayload({
                model_id: flow.modelId,
                reply_to_topic: TransactionOrchestrator.getKeyName("trans", flow.modelId),
                idempotency_key: TransactionOrchestrator.getKeyName(flow.transactionId, step.definition.action, type),
                action: step.definition.action + "",
                action_type: type,
                attempt: step.attempts,
                timestamp: Date.now(),
            }, transaction.payload, transaction.getContext());
            if (!step.definition.async) {
                execution.push(transaction
                    .handler(step.definition.action + "", type, payload, transaction)
                    .then(async (response) => {
                    await TransactionOrchestrator.setStepSuccess(transaction, step, response);
                })
                    .catch(async (error) => {
                    await TransactionOrchestrator.setStepFailure(transaction, step, error, step.definition.maxRetries);
                }));
            }
            else {
                execution.push(transaction.saveCheckpoint().then(async () => transaction
                    .handler(step.definition.action + "", type, payload, transaction)
                    .catch(async (error) => {
                    await TransactionOrchestrator.setStepFailure(transaction, step, error, step.definition.maxRetries);
                })));
            }
        }
        await (0, utils_1.promiseAll)(execution);
        if (nextSteps.next.length > 0) {
            await this.executeNext(transaction);
        }
    }
    /**
     * Start a new transaction or resume a transaction that has been previously started
     * @param transaction - The transaction to resume
     */
    async resume(transaction) {
        if (transaction.modelId !== this.id) {
            throw new Error(`TransactionModel "${transaction.modelId}" cannot be orchestrated by "${this.id}" model.`);
        }
        if (transaction.hasFinished()) {
            return;
        }
        const flow = transaction.getFlow();
        if (flow.state === types_1.TransactionState.NOT_STARTED) {
            flow.state = types_1.TransactionState.INVOKING;
            this.emit("begin", transaction);
        }
        else {
            this.emit("resume", transaction);
        }
        await this.executeNext(transaction);
    }
    /**
     * Cancel and revert a transaction compensating all its executed steps. It can be an ongoing transaction or a completed one
     * @param transaction - The transaction to be reverted
     */
    async cancelTransaction(transaction) {
        if (transaction.modelId !== this.id) {
            throw new Error(`TransactionModel "${transaction.modelId}" cannot be orchestrated by "${this.id}" model.`);
        }
        const flow = transaction.getFlow();
        if (flow.state === types_1.TransactionState.FAILED) {
            throw new Error(`Cannot revert a perment failed transaction.`);
        }
        flow.state = types_1.TransactionState.WAITING_TO_COMPENSATE;
        await this.executeNext(transaction);
    }
    async createTransactionFlow(transactionId) {
        return {
            modelId: this.id,
            transactionId: transactionId,
            hasFailedSteps: false,
            hasSkippedSteps: false,
            state: types_1.TransactionState.NOT_STARTED,
            definition: this.definition,
            steps: TransactionOrchestrator.buildSteps(this.definition),
        };
    }
    static async loadTransactionById(transactionId) {
        const transaction = await distributed_transaction_1.DistributedTransaction.loadTransaction(transactionId);
        if (transaction !== null) {
            const flow = transaction.flow;
            transaction.flow.steps = TransactionOrchestrator.buildSteps(flow.definition, flow.steps);
            return transaction;
        }
        return null;
    }
    static buildSteps(flow, existingSteps) {
        const states = {
            [TransactionOrchestrator.ROOT_STEP]: {
                id: TransactionOrchestrator.ROOT_STEP,
                next: [],
            },
        };
        const actionNames = new Set();
        const queue = [
            { obj: flow, level: [TransactionOrchestrator.ROOT_STEP] },
        ];
        while (queue.length > 0) {
            const { obj, level } = queue.shift();
            for (const key in obj) {
                // eslint-disable-next-line no-prototype-builtins
                if (!obj.hasOwnProperty(key)) {
                    continue;
                }
                if (typeof obj[key] === "object" && obj[key] !== null) {
                    queue.push({ obj: obj[key], level: [...level] });
                }
                else if (key === "action") {
                    if (actionNames.has(obj.action)) {
                        throw new Error(`Action "${obj.action}" is already defined.`);
                    }
                    actionNames.add(obj.action);
                    level.push(obj.action);
                    const id = level.join(".");
                    const parent = level.slice(0, level.length - 1).join(".");
                    states[parent].next?.push(id);
                    const definitionCopy = { ...obj };
                    delete definitionCopy.next;
                    states[id] = Object.assign(new transaction_step_1.TransactionStep(), existingSteps?.[id] || {
                        id,
                        depth: level.length - 1,
                        definition: definitionCopy,
                        saveResponse: definitionCopy.saveResponse ?? true,
                        invoke: {
                            state: types_1.TransactionState.NOT_STARTED,
                            status: types_1.TransactionStepStatus.IDLE,
                        },
                        compensate: {
                            state: types_1.TransactionState.DORMANT,
                            status: types_1.TransactionStepStatus.IDLE,
                        },
                        attempts: 0,
                        failures: 0,
                        lastAttempt: null,
                        next: [],
                    });
                }
            }
        }
        return states;
    }
    /** Create a new transaction
     * @param transactionId - unique identifier of the transaction
     * @param handler - function to handle action of the transaction
     * @param payload - payload to be passed to all the transaction steps
     */
    async beginTransaction(transactionId, handler, payload) {
        const existingTransaction = await TransactionOrchestrator.loadTransactionById(transactionId);
        let newTransaction = false;
        let modelFlow;
        if (!existingTransaction) {
            modelFlow = await this.createTransactionFlow(transactionId);
            newTransaction = true;
        }
        else {
            modelFlow = existingTransaction.flow;
        }
        const transaction = new distributed_transaction_1.DistributedTransaction(modelFlow, handler, payload, existingTransaction?.errors, existingTransaction?.context);
        if (newTransaction) {
            await transaction.saveCheckpoint();
        }
        return transaction;
    }
    static getStepByAction(flow, action) {
        for (const key in flow.steps) {
            if (action === flow.steps[key]?.definition?.action) {
                return flow.steps[key];
            }
        }
        return null;
    }
    static async getTransactionAndStepFromIdempotencyKey(responseIdempotencyKey, handler, transaction) {
        const [transactionId, action, actionType] = responseIdempotencyKey.split(TransactionOrchestrator.SEPARATOR);
        if (!transaction && !handler) {
            throw new Error("If a transaction is not provided, the handler is required");
        }
        if (!transaction) {
            const existingTransaction = await TransactionOrchestrator.loadTransactionById(transactionId);
            if (existingTransaction === null) {
                throw new Error(`Transaction ${transactionId} could not be found.`);
            }
            transaction = new distributed_transaction_1.DistributedTransaction(existingTransaction.flow, handler, undefined, existingTransaction.errors, existingTransaction.context);
        }
        const step = TransactionOrchestrator.getStepByAction(transaction.getFlow(), action);
        if (step === null) {
            throw new Error("Action not found.");
        }
        else if (step.isCompensating()
            ? actionType !== types_1.TransactionHandlerType.COMPENSATE
            : actionType !== types_1.TransactionHandlerType.INVOKE) {
            throw new Error("Incorrect action type.");
        }
        return [transaction, step];
    }
    /** Register a step success for a specific transaction and step
     * @param responseIdempotencyKey - The idempotency key for the step
     * @param handler - The handler function to execute the step
     * @param transaction - The current transaction. If not provided it will be loaded based on the responseIdempotencyKey
     * @param response - The response of the step
     */
    async registerStepSuccess(responseIdempotencyKey, handler, transaction, response) {
        const [curTransaction, step] = await TransactionOrchestrator.getTransactionAndStepFromIdempotencyKey(responseIdempotencyKey, handler, transaction);
        if (step.getStates().status === types_1.TransactionStepStatus.WAITING) {
            await TransactionOrchestrator.setStepSuccess(curTransaction, step, response);
            this.emit("resume", curTransaction);
            await this.executeNext(curTransaction);
        }
        else {
            throw new Error(`Cannot set step success when status is ${step.getStates().status}`);
        }
        return curTransaction;
    }
    /**
     * Register a step failure for a specific transaction and step
     * @param responseIdempotencyKey - The idempotency key for the step
     * @param error - The error that caused the failure
     * @param handler - The handler function to execute the step
     * @param transaction - The current transaction
     * @param response - The response of the step
     */
    async registerStepFailure(responseIdempotencyKey, error, handler, transaction) {
        const [curTransaction, step] = await TransactionOrchestrator.getTransactionAndStepFromIdempotencyKey(responseIdempotencyKey, handler, transaction);
        if (step.getStates().status === types_1.TransactionStepStatus.WAITING) {
            await TransactionOrchestrator.setStepFailure(curTransaction, step, error, 0);
            this.emit("resume", curTransaction);
            await this.executeNext(curTransaction);
        }
        else {
            throw new Error(`Cannot set step failure when status is ${step.getStates().status}`);
        }
        return curTransaction;
    }
}
exports.TransactionOrchestrator = TransactionOrchestrator;
TransactionOrchestrator.ROOT_STEP = "_root";
TransactionOrchestrator.DEFAULT_RETRIES = 0;
TransactionOrchestrator.SEPARATOR = ":";
//# sourceMappingURL=transaction-orchestrator.js.map