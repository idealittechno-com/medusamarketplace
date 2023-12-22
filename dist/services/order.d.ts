import { FindConfig, OrderService as MedusaOrderService, Order, User } from "@medusajs/medusa";
import { Selector as Selector } from "@medusajs/medusa/dist/types/common";
declare class OrderService extends MedusaOrderService {
    static LIFE_TIME: import("awilix").LifetimeType;
    protected readonly loggedInUser_: User | null;
    constructor(container: any, options: any);
    list(selector?: Selector<Order>, config?: FindConfig<Order>): Promise<Order[]>;
    listAndCount(selector: Selector<Order>, config?: FindConfig<Order>): Promise<[Order[], number]>;
    countsoldProduct(loggedInUser: any): Promise<number>;
    topSell(loggedInUser: any): Promise<{
        entities: Order[];
        raw: any[];
    }>;
    retrieve(orderId: string, config?: FindConfig<Order>): Promise<Order>;
    retrieveWithTotals(orderId: string, config?: FindConfig<Order>): Promise<Order>;
}
export default OrderService;
