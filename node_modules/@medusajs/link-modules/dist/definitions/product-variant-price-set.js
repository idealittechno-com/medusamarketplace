"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductVariantPriceSet = void 0;
const links_1 = require("../links");
const modules_sdk_1 = require("@medusajs/modules-sdk");
exports.ProductVariantPriceSet = {
    serviceName: links_1.LINKS.ProductVariantPriceSet,
    isLink: true,
    databaseConfig: {
        tableName: "product_variant_price_set",
        idPrefix: "pvps",
    },
    alias: [
        {
            name: "product_variant_price_set",
        },
        {
            name: "product_variant_price_sets",
        },
    ],
    primaryKeys: ["id", "variant_id", "price_set_id"],
    relationships: [
        {
            serviceName: modules_sdk_1.Modules.PRODUCT,
            // TODO: Remove this when product module is the default product service
            isInternalService: true,
            primaryKey: "id",
            foreignKey: "variant_id",
            alias: "variant",
            args: {
                methodSuffix: "Variants",
            },
        },
        {
            serviceName: modules_sdk_1.Modules.PRICING,
            primaryKey: "id",
            foreignKey: "price_set_id",
            alias: "price_set",
            deleteCascade: true,
        },
    ],
    extends: [
        {
            serviceName: modules_sdk_1.Modules.PRODUCT,
            relationship: {
                serviceName: links_1.LINKS.ProductVariantPriceSet,
                primaryKey: "variant_id",
                foreignKey: "id",
                alias: "price",
            },
        },
        {
            serviceName: modules_sdk_1.Modules.PRICING,
            relationship: {
                serviceName: links_1.LINKS.ProductVariantPriceSet,
                primaryKey: "price_set_id",
                foreignKey: "id",
                alias: "variant_link",
            },
        },
    ],
};
