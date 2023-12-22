"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributedTransaction = exports.TransactionPayload = exports.TransactionCheckpoint = exports.TransactionStepError = exports.TransactionContext = void 0;
const utils_1 = require("@medusajs/utils");
const types_1 = require("./types");
/**
 * @typedef TransactionContext
 * @property payload - Object containing the initial payload.
 * @property invoke - Object containing responses of Invoke handlers on steps flagged with saveResponse.
 * @property compensate - Object containing responses of Compensate handlers on steps flagged with saveResponse.
 */
class TransactionContext {
    constructor(payload = undefined, invoke = {}, compensate = {}) {
        this.payload = payload;
        this.invoke = invoke;
        this.compensate = compensate;
    }
}
exports.TransactionContext = TransactionContext;
class TransactionStepError {
    constructor(action, handlerType, error) {
        this.action = action;
        this.handlerType = handlerType;
        this.error = error;
    }
}
exports.TransactionStepError = TransactionStepError;
class TransactionCheckpoint {
    constructor(flow, context, errors = []) {
        this.flow = flow;
        this.context = context;
        this.errors = errors;
    }
}
exports.TransactionCheckpoint = TransactionCheckpoint;
class TransactionPayload {
    /**
     * @param metadata - The metadata of the transaction.
     * @param data - The initial payload data to begin a transation.
     * @param context - Object gathering responses of all steps flagged with saveResponse.
     */
    constructor(metadata, data, context) {
        this.metadata = metadata;
        this.data = data;
        this.context = context;
    }
}
exports.TransactionPayload = TransactionPayload;
/**
 * DistributedTransaction represents a distributed transaction, which is a transaction that is composed of multiple steps that are executed in a specific order.
 */
class DistributedTransaction {
    constructor(flow, handler, payload, errors, context) {
        this.flow = flow;
        this.handler = handler;
        this.payload = payload;
        this.errors = [];
        this.context = new TransactionContext();
        this.transactionId = flow.transactionId;
        this.modelId = flow.modelId;
        if (errors) {
            this.errors = errors;
        }
        this.context.payload = payload;
        if (context) {
            this.context = { ...context };
        }
    }
    getFlow() {
        return this.flow;
    }
    getContext() {
        return this.context;
    }
    getErrors(handlerType) {
        if (!(0, utils_1.isDefined)(handlerType)) {
            return this.errors;
        }
        return this.errors.filter((error) => error.handlerType === handlerType);
    }
    addError(action, handlerType, error) {
        this.errors.push({
            action,
            handlerType,
            error,
        });
    }
    addResponse(action, handlerType, response) {
        this.context[handlerType][action] = response;
    }
    hasFinished() {
        return [
            types_1.TransactionState.DONE,
            types_1.TransactionState.REVERTED,
            types_1.TransactionState.FAILED,
        ].includes(this.getState());
    }
    getState() {
        return this.getFlow().state;
    }
    get isPartiallyCompleted() {
        return !!this.getFlow().hasFailedSteps || !!this.getFlow().hasSkippedSteps;
    }
    canInvoke() {
        return (this.getFlow().state === types_1.TransactionState.NOT_STARTED ||
            this.getFlow().state === types_1.TransactionState.INVOKING);
    }
    canRevert() {
        return (this.getFlow().state === types_1.TransactionState.DONE ||
            this.getFlow().state === types_1.TransactionState.COMPENSATING);
    }
    async saveCheckpoint() {
        // TODO: Use Key/Value db to save transactions
        const key = DistributedTransaction.keyPrefix + this.transactionId;
        const data = new TransactionCheckpoint(this.getFlow(), this.getContext(), this.getErrors());
        DistributedTransaction.keyValueStore[key] = JSON.stringify(data);
        return data;
    }
    static async loadTransaction(transactionId) {
        // TODO: Use Key/Value db to load transactions
        const key = DistributedTransaction.keyPrefix + transactionId;
        if (DistributedTransaction.keyValueStore[key]) {
            return JSON.parse(DistributedTransaction.keyValueStore[key]);
        }
        return null;
    }
    async deleteCheckpoint() {
        // TODO: Delete from Key/Value db
        const key = DistributedTransaction.keyPrefix + this.transactionId;
        delete DistributedTransaction.keyValueStore[key];
    }
}
exports.DistributedTransaction = DistributedTransaction;
DistributedTransaction.keyValueStore = {}; // TODO: Use Key/Value db
DistributedTransaction.keyPrefix = "dtrans:";
//# sourceMappingURL=distributed-transaction.js.map