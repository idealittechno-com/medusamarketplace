"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCart = void 0;
var Aliases;
(function (Aliases) {
    Aliases["SalesChannel"] = "SalesChannel";
    Aliases["Addresses"] = "addresses";
    Aliases["Customer"] = "customer";
    Aliases["Region"] = "region";
    Aliases["Context"] = "context";
})(Aliases || (Aliases = {}));
async function createCart({ container, context, data, }) {
    const { manager } = context;
    const cartService = container.resolve("cartService");
    const cartServiceTx = cartService.withTransaction(manager);
    const cart = await cartServiceTx.create({
        ...data[Aliases.SalesChannel],
        ...data[Aliases.Addresses],
        ...data[Aliases.Customer],
        ...data[Aliases.Region],
        ...data[Aliases.Context],
    });
    return cart;
}
exports.createCart = createCart;
createCart.aliases = Aliases;
//# sourceMappingURL=create-cart.js.map