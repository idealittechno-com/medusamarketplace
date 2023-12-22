import { AwilixContainer } from "awilix";
import { EntityManager } from "typeorm";
import { IdempotencyCallbackResult } from "../../../../../../types/idempotency-key";
export declare const CreateLineItemSteps: {
    STARTED: string;
    FINISHED: string;
};
export declare function handleAddOrUpdateLineItem(cartId: string, data: {
    metadata?: Record<string, unknown>;
    customer_id?: string;
    variant_id: string;
    quantity: number;
}, { container, manager }: {
    container: AwilixContainer;
    manager: EntityManager;
}): Promise<IdempotencyCallbackResult>;
