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
exports.defaultRelations = exports.defaultFields = void 0;
var express_1 = require("express");
var tax_inclusive_pricing_1 = __importDefault(require("../../../../loaders/feature-flags/tax-inclusive-pricing"));
var middlewares_1 = __importDefault(require("../../../middlewares"));
var route = (0, express_1.Router)();
exports.default = (function (app, featureFlagRouter) {
    app.use("/shipping-options", route);
    if (featureFlagRouter.isFeatureEnabled(tax_inclusive_pricing_1.default.key)) {
        exports.defaultFields.push("includes_tax");
    }
    route.get("/", middlewares_1.default.wrap(require("./list-shipping-options").default));
    route.post("/", middlewares_1.default.wrap(require("./create-shipping-option").default));
    route.get("/:option_id", middlewares_1.default.wrap(require("./get-shipping-option").default));
    route.post("/:option_id", middlewares_1.default.wrap(require("./update-shipping-option").default));
    route.delete("/:option_id", middlewares_1.default.wrap(require("./delete-shipping-option").default));
    return app;
});
exports.defaultFields = [
    "id",
    "name",
    "region_id",
    "profile_id",
    "provider_id",
    "price_type",
    "amount",
    "is_return",
    "admin_only",
    "data",
    "created_at",
    "updated_at",
    "deleted_at",
    "metadata",
];
exports.defaultRelations = ["region", "profile", "requirements"];
__exportStar(require("./create-shipping-option"), exports);
__exportStar(require("./delete-shipping-option"), exports);
__exportStar(require("./get-shipping-option"), exports);
__exportStar(require("./list-shipping-options"), exports);
__exportStar(require("./update-shipping-option"), exports);
//# sourceMappingURL=index.js.map