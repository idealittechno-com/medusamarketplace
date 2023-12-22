"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const medusa_1 = require("@medusajs/medusa");
const database_1 = require("@medusajs/medusa/dist/loaders/database");
// type CreateOrderInput = {
//   store_id?: string
// } & MedusaCreateOrderInput
class OrderService extends medusa_1.OrderService {
    constructor(container, options) {
        // @ts-expect-error prefer-rest-params
        super(...arguments);
        try {
            this.loggedInUser_ = container.loggedInUser;
        }
        catch (e) {
            // avoid errors when backend first runs
        }
    }
    async list(selector, config = {}) {
        console.log("55555555555555555eeeeeeee==========================");
        const [Order] = await this.listAndCount(selector, config);
        return Order;
    }
    // For retrive all order details
    async listAndCount(selector, config) {
        var _a, _b;
        console.log("========= {{host}}/admin/orders/ =============", selector);
        if (!selector['store_id'] && ((_a = this.loggedInUser_) === null || _a === void 0 ? void 0 : _a.store_id)) {
            selector['store_id'] = this.loggedInUser_.store_id;
        }
        // config.select?.push(selector['store_id'])
        // config.relations?.push('store')
        config.select.push('store_id');
        config.relations = (_b = config.relations) !== null && _b !== void 0 ? _b : [];
        config.relations.push("children", "parent", "store");
        return await super.listAndCount(selector, config);
    }
    // vendor total sold product count 
    async countsoldProduct(loggedInUser) {
        console.log("========= {{host}}/admin/orders/222222222 =============", loggedInUser);
        // const productRepo = this.manager_.withRepository(this.orderRepository_);
        const orders = await database_1.dataSource
            .getRepository(medusa_1.Order)
            .createQueryBuilder("order")
            .select('COUNT(DISTINCT(lineitem.variant_id)) AS totalProduct')
            .leftJoin("line_item", "lineitem", "order.id = lineitem.order_id")
            .where("order.store_id =" + `'${loggedInUser.store_id}'`)
            .andWhere("lineitem.is_return ='false'")
            .andWhere("order.status ='completed'")
            .groupBy('lineitem.variant_id')
            .getRawMany();
        // return orders['raw'].length;
        // .getSql() will print the sql in console 
        // const sql = 
        //  dataSource
        // .getRepository(Order)
        // .createQueryBuilder("order")
        // .select('COUNT(DISTINCT(lineitem.variant_id)) AS totalProduct')
        // .leftJoin("line_item", "lineitem","order.id = lineitem.order_id")
        // .where("order.store_id =" + `'${loggedInUser.store_id}'` )
        // .andWhere("lineitem.is_return ='false'" )
        // .andWhere("order.status ='completed'" )
        // .groupBy('lineitem.variant_id')
        //  .getSql();
        // console.log("========= orders =============",sql);
        return orders.length;
    }
    // For retrive all order details
    async topSell(loggedInUser) {
        console.log("========= {{host}}/admin/orders/222222222 =============", loggedInUser);
        // const productRepo = this.manager_.withRepository(this.orderRepository_);
        const orders = await database_1.dataSource
            .getRepository(medusa_1.Order)
            .createQueryBuilder("order")
            .leftJoinAndSelect("address", "add", "order.billing_address_id = add.id")
            .where("order.store_id =" + `'${loggedInUser.store_id}'`)
            // .orderBy('RANDOM()')
            // .limit(10)
            .getRawAndEntities();
        console.log(orders);
        return orders;
        // Previous logic not working for orderby Random
        // const products = await productRepo.find({
        //   relations: ["store"],
        //   take: 10,
        // }) 
        // Query by TypeORM 
    }
    // Create custom service for requirement
    // static getDataOrderUpdate() {
    //   console.log("This is custom service----------------")
    //     console.log("This is custom service------333333333333333333333----------")
    //   const orderRepo =  this.manager.withRepository(OrderRepository);
    //   // const lineItemRepo =  this.manager.withRepository(LineItemRepository);
    //   // const shippingMethodRepo =  this.manager.withRepository(ShippingMethodRepository);
    //   console.log("orderRepo------>>>>>>>>>>>>>>>",orderRepo)
    //   // console.log("lineItemRepo------>>>>>>>>>>>>>>>",lineItemRepo)
    //   // console.log("shippingMethodRepo------>>>>>>>>>>>>>>>",shippingMethodRepo)
    //   // config.relations = [
    //   //   ...(config.relations || []),
    //   //   'store'
    //   // ]
    //   // const order = await super.retrieve(orderId, config);
    //   // return order
    // }
    // For get a single order details
    async retrieve(orderId, config) {
        console.log("This is calling=-==========================", config);
        if (config) {
            config.relations = [
                ...(config.relations || []),
                'store'
            ];
            const order = await super.retrieve(orderId, config);
            return order;
        }
        else {
            const order = await super.retrieve(orderId, config);
            return order;
        }
    }
    // For get a single order details
    async retrieveWithTotals(orderId, config) {
        console.log("xxxxxxxxxxxxxxxxxxxxxx=-==========================");
        config.relations = [
            ...(config.relations || []),
            'store'
        ];
        const order = await super.retrieveWithTotals(orderId, config);
        // if (order.store?.id && this.loggedInUser_?.store_id && order.store.id !== this.loggedInUser_.store_id) {
        //   // Throw error if you don't want a order to be accessible to other stores
        //   throw new Error('order does not exist in store.');
        // }
        return order;
    }
}
OrderService.LIFE_TIME = awilix_1.Lifetime.SCOPED;
exports.default = OrderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvb3JkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBaUM7QUFFakMsNkNBSXlCO0FBT3pCLHFFQUUrQztBQUsvQyw0QkFBNEI7QUFDNUIsc0JBQXNCO0FBQ3RCLDZCQUE2QjtBQUU1QixNQUFNLFlBQWEsU0FBUSxxQkFBa0I7SUFJNUMsWUFBWSxTQUFTLEVBQUUsT0FBTztRQUM1QixzQ0FBc0M7UUFDdEMsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUE7UUFDbkIsSUFBSTtZQUNGLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQTtTQUM1QztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsdUNBQXVDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJLENBQ1IsUUFBMEIsRUFDMUIsU0FBNEIsRUFDN0I7UUFFQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFEQUFxRCxDQUFDLENBQUE7UUFFbEUsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFFekQsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDO0lBRUgsZ0NBQWdDO0lBQ2hDLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBeUIsRUFBRSxNQUEwQjs7UUFFdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsRUFBQyxRQUFRLENBQUMsQ0FBQTtRQUV0RSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFJLE1BQUEsSUFBSSxDQUFDLGFBQWEsMENBQUUsUUFBUSxDQUFBLEVBQUU7WUFDekQsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFBO1NBQ25EO1FBRUQsNENBQTRDO1FBQzVDLGtDQUFrQztRQUVsQyxNQUFN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