import { Context, LoadedModule, MedusaContainer } from "@medusajs/types";
import { WorkflowDefinition, WorkflowManager } from "./workflow-manager";
import { DistributedTransaction } from "../transaction";
export declare class GlobalWorkflow extends WorkflowManager {
    protected static workflows: Map<string, WorkflowDefinition>;
    protected container: MedusaContainer;
    protected context: Context;
    constructor(modulesLoaded?: LoadedModule[] | MedusaContainer, context?: Context);
    run(workflowId: string, uniqueTransactionId: string, input?: unknown): Promise<DistributedTransaction>;
    registerStepSuccess(workflowId: string, idempotencyKey: string, response?: unknown): Promise<DistributedTransaction>;
    registerStepFailure(workflowId: string, idempotencyKey: string, error?: Error | any): Promise<DistributedTransaction>;
}
