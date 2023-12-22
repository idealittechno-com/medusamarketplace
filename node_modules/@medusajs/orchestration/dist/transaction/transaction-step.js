"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionStep = void 0;
const types_1 = require("./types");
/**
 * @class TransactionStep
 * @classdesc A class representing a single step in a transaction flow
 */
class TransactionStep {
    constructor() {
        /**
         * @member id - The id of the step
         * @member depth - The depth of the step in the flow
         * @member definition - The definition of the step
         * @member invoke - The current state and status of the invoke action of the step
         * @member compensate - The current state and status of the compensate action of the step
         * @member attempts - The number of attempts made to execute the step
         * @member failures - The number of failures encountered while executing the step
         * @member lastAttempt - The timestamp of the last attempt made to execute the step
         * @member next - The ids of the next steps in the flow
         * @member saveResponse - A flag indicating if the response of a step should be shared in the transaction context and available to subsequent steps - default is true
         */
        this.stepFailed = false;
    }
    getStates() {
        return this.isCompensating() ? this.compensate : this.invoke;
    }
    beginCompensation() {
        if (this.isCompensating()) {
            return;
        }
        this.stepFailed = true;
        this.attempts = 0;
        this.failures = 0;
        this.lastAttempt = null;
    }
    isCompensating() {
        return this.stepFailed;
    }
    changeState(toState) {
        const allowed = {
            [types_1.TransactionState.DORMANT]: [types_1.TransactionState.NOT_STARTED],
            [types_1.TransactionState.NOT_STARTED]: [
                types_1.TransactionState.INVOKING,
                types_1.TransactionState.COMPENSATING,
                types_1.TransactionState.FAILED,
                types_1.TransactionState.SKIPPED,
            ],
            [types_1.TransactionState.INVOKING]: [
                types_1.TransactionState.FAILED,
                types_1.TransactionState.DONE,
            ],
            [types_1.TransactionState.COMPENSATING]: [
                types_1.TransactionState.REVERTED,
                types_1.TransactionState.FAILED,
            ],
            [types_1.TransactionState.DONE]: [types_1.TransactionState.COMPENSATING],
        };
        const curState = this.getStates();
        if (curState.state === toState ||
            allowed?.[curState.state]?.includes(toState)) {
            curState.state = toState;
            return;
        }
        throw new Error(`Updating State from "${curState.state}" to "${toState}" is not allowed.`);
    }
    changeStatus(toStatus) {
        const allowed = {
            [types_1.TransactionStepStatus.WAITING]: [
                types_1.TransactionStepStatus.OK,
                types_1.TransactionStepStatus.TEMPORARY_FAILURE,
                types_1.TransactionStepStatus.PERMANENT_FAILURE,
            ],
            [types_1.TransactionStepStatus.TEMPORARY_FAILURE]: [
                types_1.TransactionStepStatus.IDLE,
                types_1.TransactionStepStatus.PERMANENT_FAILURE,
            ],
            [types_1.TransactionStepStatus.PERMANENT_FAILURE]: [types_1.TransactionStepStatus.IDLE],
        };
        const curState = this.getStates();
        if (curState.status === toStatus ||
            toStatus === types_1.TransactionStepStatus.WAITING ||
            allowed?.[curState.status]?.includes(toStatus)) {
            curState.status = toStatus;
            return;
        }
        throw new Error(`Updating Status from "${curState.status}" to "${toStatus}" is not allowed.`);
    }
    canRetry() {
        return !!(this.lastAttempt &&
            this.definition.retryInterval &&
            Date.now() - this.lastAttempt > this.definition.retryInterval * 1e3);
    }
    canInvoke(flowState) {
        const { status, state } = this.getStates();
        return ((!this.isCompensating() &&
            state === types_1.TransactionState.NOT_STARTED &&
            flowState === types_1.TransactionState.INVOKING) ||
            status === types_1.TransactionStepStatus.TEMPORARY_FAILURE);
    }
    canCompensate(flowState) {
        return (this.isCompensating() &&
            this.getStates().state === types_1.TransactionState.NOT_STARTED &&
            flowState === types_1.TransactionState.COMPENSATING);
    }
}
exports.TransactionStep = TransactionStep;
//# sourceMappingURL=transaction-step.js.map