import { 
  type SubscriberConfig, 
  type SubscriberArgs,
  OrderService,
  Product,
  LineItem,
  OrderStatus,
  ShippingMethod
} from "@medusajs/medusa"
import { EntityManager } from "typeorm"
import { LineItemRepository } from '@medusajs/medusa/dist/repositories/line-item';
import { ShippingMethodRepository } from "@medusajs/medusa/dist/repositories/shipping-method";
import  ProductService  from "../services/product";
import  ordService  from "../services/order";
// import { OrderRepository } from "/home/lalit/Public/medusaCommerce/my-medusa-store/src/repositories/order";
import OrderRepository, { OrderRepository as MedusaOrderRepository } from '@medusajs/medusa/dist/repositories/order';
import { EventBusService } from "@medusajs/medusa/dist/services";
import {
  dataSource,
} from "@medusajs/medusa/dist/loaders/database"

import { Order } from "../models/order"
  
export default async function handleOrderPlaced({ 
  data, eventName, container, pluginOptions 
}: SubscriberArgs<Record<string, string>>) {
  
  const orderService: ordService = await container.resolve(
    "orderService"
  )
  const productService: ProductService = await container.resolve(
    "productService"
  )
  console.log("================== ORder id ==================",data.id);

  const order = await orderService.retrieve(data.id, {
    // you can include other relations as well
    relations: ['items','shipping_methods','items.variant']
    })

  //group items by store id
  const groupedItems = {};

if(order.items) {
    for (const item of order.items) {
      console.log("==================This product_id ==================",item.variant.product_id);
      const product = await productService.retrieve(item.variant.product_id, { select: ['id']});
      // const product = await productService.retrieve(item.variant.product_id);
      // console.log("==================This product store data id ==================",product.store.id);
      const store_id = product.store.id;
      if (!store_id) {
        continue;
      }
      if (!groupedItems.hasOwnProperty(store_id)) {
        groupedItems[store_id] = [];
      }          
      groupedItems[store_id].push(item);
    }
        // async (transactionManager: EntityManager) => {
        console.log("============= YES ============= ")

        const orderRepo =  dataSource.getRepository(Order);
        const lineItemRepo =  dataSource.getRepository(LineItem);
        const shippingMethodRepo =  dataSource.getRepository(ShippingMethod);
         
        // console.log("=========shippingMethodRepo:=>",shippingMethodRepo);

         for (const store_id in groupedItems) {
          //create order
          const childOrder = orderRepo.create({
            ...order,
           order_parent_id: data.id,
            store_id: store_id,
            cart_id: null,
            cart: null,
            id: null,
            shipping_methods: []
          }) as Order;
          const orderResult = await orderRepo.save(childOrder);    
          // console.log("orderResult ==================>",orderResult);
          // create shipping methods
          for (const shippingMethod of order.shipping_methods) {
            const newShippingMethod = shippingMethodRepo.create({
              ...shippingMethod,
              id: null,
              cart_id: null,
              cart: null,
              order_id: orderResult.id
            });            
            // console.log("=========newShippingMethod:=>",newShippingMethod);
            await shippingMethodRepo.save(newShippingMethod);
          }          
          
          // // create line items
          const items: LineItem[] = groupedItems[store_id];
          for (const item of items) {
            const newItem = lineItemRepo.create({
              ...item,
              id: null,
              order_id: orderResult.id,
              cart_id: null
            })
            await lineItemRepo.save(newItem);
          }
    }
  // }
}
// }
}
export const config: SubscriberConfig = {
  event: "order.placed",
  context: {
    subscriberId: "customer-created-handler",
  },
}
