"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modules_sdk_1 = require("@medusajs/modules-sdk");
exports.default = {
    serviceName: "cartService",
    primaryKeys: ["id"],
    linkableKeys: { cart_id: "Cart" },
    alias: [
        {
            name: "cart",
        },
    ],
    relationships: [
        {
            serviceName: modules_sdk_1.Modules.PRODUCT,
            primaryKey: "id",
            foreignKey: "variant_id",
            alias: "variant",
            args: {
                methodSuffix: "Variants",
            },
        },
        {
            serviceName: "regionService",
            primaryKey: "id",
            foreignKey: "region_id",
            alias: "region",
        },
        {
            serviceName: "customerService",
            primaryKey: "id",
            foreignKey: "customer_id",
            alias: "customer",
        },
    ],
};
//# sourceMappingURL=cart-service.js.map