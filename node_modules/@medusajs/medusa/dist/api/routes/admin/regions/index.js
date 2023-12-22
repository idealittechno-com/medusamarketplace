"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminGetRegionsRegionFulfillmentOptionsRes = exports.FulfillmentOption = exports.defaultAdminRegionRelations = exports.defaultAdminRegionFields = void 0;
var express_1 = require("express");
require("reflect-metadata");
var tax_inclusive_pricing_1 = __importDefault(require("../../../../loaders/feature-flags/tax-inclusive-pricing"));
var middlewares_1 = __importDefault(require("../../../middlewares"));
var route = (0, express_1.Router)();
exports.default = (function (app, featureFlagRouter) {
    app.use("/regions", route);
    if (featureFlagRouter.isFeatureEnabled(tax_inclusive_pricing_1.default.key)) {
        exports.defaultAdminRegionFields.push("includes_tax");
    }
    route.get("/", middlewares_1.default.wrap(require("./list-regions").default));
    route.get("/:region_id", middlewares_1.default.wrap(require("./get-region").default));
    route.get("/:region_id/fulfillment-options", middlewares_1.default.wrap(require("./get-fulfillment-options").default));
    route.post("/", middlewares_1.default.wrap(require("./create-region").default));
    route.post("/:region_id", middlewares_1.default.wrap(require("./update-region").default));
    route.delete("/:region_id", middlewares_1.default.wrap(require("./delete-region").default));
    route.post("/:region_id/countries", middlewares_1.default.wrap(require("./add-country").default));
    route.delete("/:region_id/countries/:country_code", middlewares_1.default.wrap(require("./remove-country").default));
    route.post("/:region_id/payment-providers", middlewares_1.default.wrap(require("./add-payment-provider").default));
    route.delete("/:region_id/payment-providers/:provider_id", middlewares_1.default.wrap(require("./remove-payment-provider").default));
    route.post("/:region_id/fulfillment-providers", middlewares_1.default.wrap(require("./add-fulfillment-provider").default));
    route.delete("/:region_id/fulfillment-providers/:provider_id", middlewares_1.default.wrap(require("./remove-fulfillment-provider").default));
    return app;
});
exports.defaultAdminRegionFields = [
    "id",
    "name",
    "automatic_taxes",
    "gift_cards_taxable",
    "tax_provider_id",
    "currency_code",
    "tax_rate",
    "tax_code",
    "created_at",
    "updated_at",
    "deleted_at",
    "metadata",
];
exports.defaultAdminRegionRelations = [
    "countries",
    "payment_providers",
    "fulfillment_providers",
];
var FulfillmentOption = /** @class */ (function () {
    function FulfillmentOption() {
    }
    return FulfillmentOption;
}());
exports.FulfillmentOption = FulfillmentOption;
/**
 * @schema AdminGetRegionsRegionFulfillmentOptionsRes
 * type: object
 * description: "The list of fulfillment options in a region."
 * required:
 *   - fulfillment_options
 * properties:
 *   fulfillment_options:
 *     type: array
 *     description: Fulfillment providers details.
 *     items:
 *       type: object
 *       required:
 *         - provider_id
 *         - options
 *       properties:
 *         provider_id:
 *           description: ID of the fulfillment provider
 *           type: string
 *         options:
 *           description: fulfillment provider options
 *           type: array
 *           items:
 *             type: object
 *             example:
 *               - id: "manual-fulfillment"
 *               - id: "manual-fulfillment-return"
 *                 is_return: true
 */
var AdminGetRegionsRegionFulfillmentOptionsRes = /** @class */ (function () {
    function AdminGetRegionsRegionFulfillmentOptionsRes() {
    }
    return AdminGetRegionsRegionFulfillmentOptionsRes;
}());
exports.AdminGetRegionsRegionFulfillmentOptionsRes = AdminGetRegionsRegionFulfillmentOptionsRes;
__exportStar(require("./add-country"), exports);
__exportStar(require("./add-fulfillment-provider"), exports);
__exportStar(require("./add-payment-provider"), exports);
__exportStar(require("./create-region"), exports);
__exportStar(require("./list-regions"), exports);
__exportStar(require("./update-region"), exports);
//# sourceMappingURL=index.js.map