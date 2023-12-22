"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const medusa_1 = require("@medusajs/medusa");
const database_1 = require("@medusajs/medusa/dist/loaders/database");
const order_1 = require("../models/order");
async function handleOrderPlaced({ data, eventName, container, pluginOptions }) {
    const orderService = await container.resolve("orderService");
    const productService = await container.resolve("productService");
    console.log("================== ORder id ==================", data.id);
    const order = await orderService.retrieve(data.id, {
        // you can include other relations as well
        relations: ['items', 'shipping_methods', 'items.variant']
    });
    //group items by store id
    const groupedItems = {};
    if (order.items) {
        for (const item of order.items) {
            console.log("==================This product_id ==================", item.variant.product_id);
            const product = await productService.retrieve(item.variant.product_id, { select: ['id'] });
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
        console.log("============= YES ============= ");
        const orderRepo = database_1.dataSource.getRepository(order_1.Order);
        const lineItemRepo = database_1.dataSource.getRepository(medusa_1.LineItem);
        const shippingMethodRepo = database_1.dataSource.getRepository(medusa_1.ShippingMethod);
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
            });
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
            const items = groupedItems[store_id];
            for (const item of items) {
                const newItem = lineItemRepo.create({
                    ...item,
                    id: null,
                    order_id: orderResult.id,
                    cart_id: null
                });
                await lineItemRepo.save(newItem);
            }
        }
        // }
    }
    // }
}
exports.default = handleOrderPlaced;
exports.config = {
    event: "order.placed",
    context: {
        subscriberId: "customer-created-handler",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcGxhY2VkLWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc3Vic2NyaWJlcnMvb3JkZXItcGxhY2VkLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBUXlCO0FBU3pCLHFFQUUrQztBQUUvQywyQ0FBdUM7QUFFeEIsS0FBSyxVQUFVLGlCQUFpQixDQUFDLEVBQzlDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFDRjtJQUV2QyxNQUFNLFlBQVksR0FBZSxNQUFNLFNBQVMsQ0FBQyxPQUFPLENBQ3RELGNBQWMsQ0FDZixDQUFBO0lBQ0QsTUFBTSxjQUFjLEdBQW1CLE1BQU0sU0FBUyxDQUFDLE9BQU8sQ0FDNUQsZ0JBQWdCLENBQ2pCLENBQUE7SUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxFQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUV0RSxNQUFNLEtBQUssR0FBRyxNQUFNLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNqRCwwQ0FBMEM7UUFDMUMsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLGVBQWUsQ0FBQztLQUN0RCxDQUFDLENBQUE7SUFFSix5QkFBeUI7SUFDekIsTUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBRTFCLElBQUcsS0FBSyxDQUFDLEtBQUssRUFBRTtRQUNaLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLHNEQUFzRCxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDNUYsTUFBTSxPQUFPLEdBQUcsTUFBTSxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUMs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