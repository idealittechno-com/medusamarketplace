import { Lifetime } from "awilix"

import { 
  Address,
  FindConfig,
  OrderService as MedusaOrderService, Order, User,
} from "@medusajs/medusa"

// import { OrderRepository } from "/home/lalit/Public/medusaCommerce/my-medusa-store/src/repositories/order";
import OrderRepository, { OrderRepository as MedusaOrderRepository } from '@medusajs/medusa/dist/repositories/order';

import {  Selector as Selector } from "@medusajs/medusa/dist/types/common"
import { AdminListOrdersSelector as AdminListOrdersSelector } from "@medusajs/medusa/dist/types/orders"
import {
  dataSource,
} from "@medusajs/medusa/dist/loaders/database"

type selector<store_id> = store_id


// type CreateOrderInput = {
//   store_id?: string
// } & MedusaCreateOrderInput

 class OrderService extends MedusaOrderService {
  static LIFE_TIME = Lifetime.SCOPED
  protected readonly loggedInUser_: User | null

  constructor(container, options) {
    // @ts-expect-error prefer-rest-params
    super(...arguments)
    try {
      this.loggedInUser_ = container.loggedInUser
    } catch (e) {
      // avoid errors when backend first runs
    }
  } 

  async list(
    selector?: Selector<Order>,
    config: FindConfig<Order> = {
  }): Promise<Order[]> {

    console.log("55555555555555555eeeeeeee==========================")

    const [Order] = await this.listAndCount(selector, config)

    return Order
  }

// For retrive all order details
async listAndCount(selector: Selector<Order>, config?: FindConfig<Order>): Promise<[Order[], number]> {

  console.log("========= {{host}}/admin/orders/ =============",selector)

  if (!selector['store_id'] && this.loggedInUser_?.store_id) {
    selector['store_id'] = this.loggedInUser_.store_id
  }

  // config.select?.push(selector['store_id'])
  // config.relations?.push('store')
  
  config.select.push('store_id')
  config.relations = config.relations ?? []
  config.relations.push("children", "parent", "store")

  return await super.listAndCount(selector, config)
}


// vendor total sold product count 
async countsoldProduct(loggedInUser) {
  console.log("========= {{host}}/admin/orders/222222222 =============",loggedInUser);
  // const productRepo = this.manager_.withRepository(this.orderRepository_);
        const orders = await dataSource
        .getRepository(Order)
        .createQueryBuilder("order")
        .select('COUNT(DISTINCT(lineitem.variant_id)) AS totalProduct')
        .leftJoin("line_item", "lineitem","order.id = lineitem.order_id")
        .where("order.store_id =" + `'${loggedInUser.store_id}'` )
        .andWhere("lineitem.is_return ='false'" )
        .andWhere("order.status ='completed'" )
        .groupBy('lineitem.variant_id')
        .getRawMany()
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
  console.log("========= {{host}}/admin/orders/222222222 =============",loggedInUser);
  
  // const productRepo = this.manager_.withRepository(this.orderRepository_);
        const orders = await dataSource
        .getRepository(Order)
        .createQueryBuilder("order")
        .leftJoinAndSelect("address", "add","order.billing_address_id = add.id")
        .where("order.store_id =" + `'${loggedInUser.store_id}'` )
        // .orderBy('RANDOM()')
        // .limit(10)
        .getRawAndEntities()
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
  async retrieve(orderId: string, config?: FindConfig<Order>): Promise<Order> {

    console.log("This is calling=-==========================",config);
    if(config) {
      config.relations = [
        ...(config.relations || []),
        'store'
      ]
      const order = await super.retrieve(orderId, config);
      return order
    } else {
      const order = await super.retrieve(orderId, config);
      return order
    }
    
  }

  // For get a single order details
  async retrieveWithTotals(orderId: string, config?: FindConfig<Order>): Promise<Order> {
    console.log("xxxxxxxxxxxxxxxxxxxxxx=-==========================")
    config.relations = [
      ...(config.relations || []),
      'store'
    ]
    const order = await super.retrieveWithTotals(orderId, config);

    // if (order.store?.id && this.loggedInUser_?.store_id && order.store.id !== this.loggedInUser_.store_id) {
    //   // Throw error if you don't want a order to be accessible to other stores
    //   throw new Error('order does not exist in store.');
    // }

    return order
  }

  // async update(productObject: CreateProductInput): Promise<Product> {
  //   if (!productObject.store_id && this.loggedInUser_?.store_id) {
  //     productObject.store_id = this.loggedInUser_.store_id
  //   }

  //   return await super.create(productObject);
  // }


}

export default OrderService