"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalWorkflow = void 0;
const workflow_manager_1 = require("./workflow-manager");
const awilix_1 = require("awilix");
const utils_1 = require("@medusajs/utils");
class GlobalWorkflow extends workflow_manager_1.WorkflowManager {
    constructor(modulesLoaded, context) {
        super();
        const container = (0, utils_1.createMedusaContainer)();
        // Medusa container
        if (!Array.isArray(modulesLoaded) && modulesLoaded) {
            const cradle = modulesLoaded.cradle;
            for (const key in cradle) {
                container.register(key, (0, awilix_1.asValue)(cradle[key]));
            }
        }
        // Array of modules
        else if (modulesLoaded?.length) {
            for (const mod of modulesLoaded) {
                const registrationName = mod.__definition.registrationName;
                container.register(registrationName, (0, awilix_1.asValue)(mod));
            }
        }
        this.container = container;
        this.context = context ?? {};
    }
    async run(workflowId, uniqueTransactionId, input) {
        if (!workflow_manager_1.WorkflowManager.workflows.has(workflowId)) {
            throw new Error(`Workflow with id "${workflowId}" not found.`);
        }
        const workflow = workflow_manager_1.WorkflowManager.workflows.get(workflowId);
        const orchestrator = workflow.orchestrator;
        const transaction = await orchestrator.beginTransaction(uniqueTransactionId, workflow.handler(this.container, this.context), input);
        await orchestrator.resume(transaction);
        return transaction;
    }
    async registerStepSuccess(workflowId, idempotencyKey, response) {
        if (!workflow_manager_1.WorkflowManager.workflows.has(workflowId)) {
            throw new Error(`Workflow with id "${workflowId}" not found.`);
        }
        const workflow = workflow_manager_1.WorkflowManager.workflows.get(workflowId);
        return await workflow.orchestrator.registerStepSuccess(idempotencyKey, workflow.handler(this.container, this.context), undefined, response);
    }
    async registerStepFailure(workflowId, idempotencyKey, error) {
        if (!workflow_manager_1.WorkflowManager.workflows.has(workflowId)) {
            throw new Error(`Workflow with id "${workflowId}" not found.`);
        }
        const workflow = workflow_manager_1.WorkflowManager.workflows.get(workflowId);
        return await workflow.orchestrator.registerStepFailure(idempotencyKey, error, workflow.handler(this.container, this.context));
    }
}
exports.GlobalWorkflow = GlobalWorkflow;
GlobalWorkflow.workflows = new Map();
//# sourceMappingURL=global-workflow.js.map