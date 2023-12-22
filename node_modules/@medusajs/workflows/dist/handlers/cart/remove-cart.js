"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCart = void 0;
var Aliases;
(function (Aliases) {
    Aliases["Cart"] = "cart";
})(Aliases || (Aliases = {}));
async function removeCart({ container, context, data, }) {
    const { manager } = context;
    const cartService = container.resolve("cartService");
    const cartServiceTx = cartService.withTransaction(manager);
    const cart = data[Aliases.Cart];
    await cartServiceTx.delete(cart.id);
}
exports.removeCart = removeCart;
removeCart.aliases = Aliases;
//# sourceMappingURL=remove-cart.js.map