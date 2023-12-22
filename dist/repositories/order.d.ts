import { Order } from "../models/order";
export declare const OrderRepository: import("typeorm").Repository<Order> & {
    target: import("typeorm").EntityTarget<import("@medusajs/medusa").Order> & typeof Order;
    manager: import("typeorm").EntityManager;
    queryRunner?: import("typeorm").QueryRunner;
    findWithRelations(relations?: import("typeorm").FindOptionsRelations<import("@medusajs/medusa").Order>, optionsWithoutRelations?: Omit<import("typeorm").FindManyOptions<import("@medusajs/medusa").Order>, "relations">): Promise<import("@medusajs/medusa").Order[]>;
    findOneWithRelations(relations?: import("typeorm").FindOptionsRelations<import("@medusajs/medusa").Order>, optionsWithoutRelations?: Omit<import("typeorm").FindManyOptions<import("@medusajs/medusa").Order>, "relations">): Promise<import("@medusajs/medusa").Order>;
};
export default OrderRepository;
