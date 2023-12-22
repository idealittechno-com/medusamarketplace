import { AbstractCartCompletionStrategy, CartCompletionResponse } from "../interfaces";
import { IEventBusService, IInventoryService } from "@medusajs/types";
import { IdempotencyKey, Order } from "../models";
import OrderService from "../services/order";
import { PaymentProviderService, ProductVariantInventoryService } from "../services";
import CartService from "../services/cart";
import { EntityManager } from "typeorm";
import IdempotencyKeyService from "../services/idempotency-key";
import { RequestContext } from "../types/request";
import SwapService from "../services/swap";
type InjectedDependencies = {
    productVariantInventoryService: ProductVariantInventoryService;
    paymentProviderService: PaymentProviderService;
    idempotencyKeyService: IdempotencyKeyService;
    cartService: CartService;
    orderService: OrderService;
    swapService: SwapService;
    manager: EntityManager;
    inventoryService: IInventoryService;
    eventBusService: IEventBusService;
};
declare class CartCompletionStrategy extends AbstractCartCompletionStrategy {
    protected readonly productVariantInventoryService_: ProductVariantInventoryService;
    protected readonly paymentProviderService_: PaymentProviderService;
    protected readonly idempotencyKeyService_: IdempotencyKeyService;
    protected readonly cartService_: CartService;
    protected readonly orderService_: OrderService;
    protected readonly swapService_: SwapService;
    protected readonly inventoryService_: IInventoryService;
    protected readonly eventBusService_: IEventBusService;
    constructor({ productVariantInventoryService, paymentProviderService, idempotencyKeyService, cartService, orderService, swapService, inventoryService, eventBusService, }: InjectedDependencies);
    complete(id: string, ikey: IdempotencyKey, context: RequestContext): Promise<CartCompletionResponse>;
    protected handleCreateTaxLines(id: string, { manager }: {
        manager: EntityManager;
    }): Promise<{
        response_code: number;
        response_body: {
            code: string;
            message: string;
            type: string;
        };
        recovery_point?: undefined;
    } | {
        recovery_point: string;
        response_code?: undefined;
        response_body?: undefined;
    }>;
    protected handleTaxLineCreated(id: string, idempotencyKey: IdempotencyKey, { context, manager }: {
        context: any;
        manager: EntityManager;
    }): Promise<{
        response_code: number;
        response_body: {
            code: string;
            message: string;
            type: string;
        };
        recovery_point?: undefined;
    } | {
        response_code: number;
        response_body: {
            data: import("../models").Cart;
            payment_status: string;
            type: string;
        };
        recovery_point?: undefined;
    } | {
        recovery_point: string;
        response_code?: undefined;
        response_body?: undefined;
    }>;
    protected removeReservations(reservations: any): Promise<void>;
    protected handlePaymentAuthorized(id: string, { manager }: {
        manager: EntityManager;
    }): Promise<{
        response_code: number;
        response_body: {
            errors: {
                message: string;
                type: string;
                code: string | undefined;
            }[];
            data?: undefined;
            type?: undefined;
            message?: undefined;
            code?: undefined;
        };
    } | {
        response_code: number;
        response_body: {
            data: import("../models").Swap;
            type: string;
            errors?: undefined;
            message?: undefined;
            code?: undefined;
        };
    } | {
        response_code: number;
        response_body: {
            message: any;
            type: any;
            code: any;
            errors?: undefined;
            data?: undefined;
        };
    } | {
        response_code: number;
        response_body: {
            data: Order;
            type: string;
            errors?: undefined;
            message?: undefined;
            code?: undefined;
        };
    }>;
}
export default CartCompletionStrategy;
