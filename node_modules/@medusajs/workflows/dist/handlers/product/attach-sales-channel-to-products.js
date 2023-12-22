"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachSalesChannelToProducts = void 0;
const utils_1 = require("@medusajs/utils");
async function attachSalesChannelToProducts({ container, context, data, }) {
    const { manager } = context;
    const productsHandleSalesChannelsMap = data.productsHandleSalesChannelsMap;
    const products = data.products;
    const salesChannelService = container.resolve("salesChannelService");
    const salesChannelServiceTx = salesChannelService.withTransaction(manager);
    const salesChannelIdProductIdsMap = new Map();
    products.forEach((product) => {
        const salesChannelIds = productsHandleSalesChannelsMap.get(product.handle);
        if (salesChannelIds) {
            salesChannelIds.forEach((salesChannelId) => {
                const productIds = salesChannelIdProductIdsMap.get(salesChannelId) || [];
                productIds.push(product.id);
                salesChannelIdProductIdsMap.set(salesChannelId, productIds);
            });
        }
    });
    await (0, utils_1.promiseAll)(Array.from(salesChannelIdProductIdsMap.entries()).map(async ([salesChannelId, productIds]) => {
        return await salesChannelServiceTx.addProducts(salesChannelId, productIds);
    }));
}
exports.attachSalesChannelToProducts = attachSalesChannelToProducts;
attachSalesChannelToProducts.aliases = {
    products: "products",
};
//# sourceMappingURL=attach-sales-channel-to-products.js.map