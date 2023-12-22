"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LINKS = void 0;
const modules_sdk_1 = require("@medusajs/modules-sdk");
const utils_1 = require("./utils");
exports.LINKS = {
    ProductVariantInventoryItem: (0, utils_1.composeLinkName)(modules_sdk_1.Modules.PRODUCT, "variant_id", modules_sdk_1.Modules.INVENTORY, "inventory_item_id"),
    ProductVariantPriceSet: (0, utils_1.composeLinkName)(modules_sdk_1.Modules.PRODUCT, "variant_id", modules_sdk_1.Modules.PRICING, "price_set_id"),
    // Internal services
    ProductShippingProfile: (0, utils_1.composeLinkName)(modules_sdk_1.Modules.PRODUCT, "variant_id", "shippingProfileService", "profile_id"),
};
