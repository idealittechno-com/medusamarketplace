"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveCart = void 0;
var Aliases;
(function (Aliases) {
    Aliases["Cart"] = "cart";
    Aliases["Config"] = "config";
})(Aliases || (Aliases = {}));
async function retrieveCart({ container, context, data, }) {
    const { manager } = context;
    const cartService = container.resolve("cartService");
    const cartServiceTx = cartService.withTransaction(manager);
    const retrieved = await cartServiceTx.retrieve(data[Aliases.Cart].id, data[Aliases.Config].retrieveConfig);
    return retrieved;
}
exports.retrieveCart = retrieveCart;
retrieveCart.aliases = Aliases;
//# sourceMappingURL=retrieve-cart.js.map