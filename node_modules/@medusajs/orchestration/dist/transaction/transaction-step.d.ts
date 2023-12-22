import { DistributedTransaction, TransactionPayload } from "./distributed-transaction";
import { TransactionHandlerType, TransactionState, TransactionStepStatus, TransactionStepsDefinition } from "./types";
export type TransactionStepHandler = (actionId: string, handlerType: TransactionHandlerType, payload: TransactionPayload, transaction?: DistributedTransaction) => Promise<unknown>;
/**
 * @class TransactionStep
 * @classdesc A class representing a single step in a transaction flow
 */
export declare class TransactionStep {
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
    private stepFailed;
    id: string;
    depth: number;
    definition: TransactionStepsDefinition;
    invoke: {
        state: TransactionState;
        status: TransactionStepStatus;
    };
    compensate: {
        state: TransactionState;
        status: TransactionStepStatus;
    };
    attempts: number;
    failures: number;
    lastAttempt: number | null;
    next: string[];
    saveResponse: boolean;
    getStates(): {
        state: TransactionState;
        status: TransactionStepStatus;
    };
    beginCompensation(): void;
    isCompensating(): boolean;
    changeState(toState: TransactionState): void;
    changeStatus(toStatus: TransactionStepStatus): void;
    canRetry(): boolean;
    canInvoke(flowState: TransactionState): boolean;
    canCompensate(flowState: TransactionState): boolean;
}
