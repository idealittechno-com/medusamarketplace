"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachLineItemsToCart = void 0;
const utils_1 = require("@medusajs/utils");
var Aliases;
(function (Aliases) {
    Aliases["LineItems"] = "line_items";
    Aliases["Cart"] = "cart";
})(Aliases || (Aliases = {}));
async function attachLineItemsToCart({ container, context, data, }) {
    const { manager } = context;
    const featureFlagRouter = container.resolve("featureFlagRouter");
    const lineItemService = container.resolve("lineItemService");
    const cartService = container.resolve("cartService");
    const lineItemServiceTx = lineItemService.withTransaction(manager);
    const cartServiceTx = cartService.withTransaction(manager);
    let lineItems = data[Aliases.LineItems].items;
    const cart = data[Aliases.Cart];
    if (lineItems?.length) {
        const generateInputData = lineItems.map((item) => ({
            variantId: item.variant_id,
            quantity: item.quantity,
        }));
        lineItems = await lineItemServiceTx.generate(generateInputData, {
            region_id: cart.region_id,
            customer_id: cart.customer_id,
        });
        await cartServiceTx.addOrUpdateLineItems(cart.id, lineItems, {
            validateSalesChannels: featureFlagRouter.isFeatureEnabled(utils_1.SalesChannelFeatureFlag.key),
        });
    }
}
exports.attachLineItemsToCart = attachLineItemsToCart;
attachLineItemsToCart.aliases = Aliases;
//# sourceMappingURL=attach-line-items-to-cart.js.map