"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAddOrUpdateLineItem = exports.CreateLineItemSteps = void 0;
var index_1 = require("../../index");
var sales_channels_1 = __importDefault(require("../../../../../../loaders/feature-flags/sales-channels"));
exports.CreateLineItemSteps = {
    STARTED: "started",
    FINISHED: "finished",
};
function handleAddOrUpdateLineItem(cartId, data, _a) {
    var _b;
    var container = _a.container, manager = _a.manager;
    return __awaiter(this, void 0, void 0, function () {
        var cartService, lineItemService, featureFlagRouter, productVariantInventoryService, txCartService, cart, line, relations, shouldSetAvailability;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    cartService = container.resolve("cartService");
                    lineItemService = container.resolve("lineItemService");
                    featureFlagRouter = container.resolve("featureFlagRouter");
                    productVariantInventoryService = container.resolve("productVariantInventoryService");
                    txCartService = cartService.withTransaction(manager);
                    return [4 /*yield*/, txCartService.retrieve(cartId, {
                            select: ["id", "region_id", "customer_id"],
                        })];
                case 1:
                    cart = _c.sent();
                    return [4 /*yield*/, lineItemService
                            .withTransaction(manager)
                            .generate(data.variant_id, cart.region_id, data.quantity, {
                            customer_id: data.customer_id || cart.customer_id,
                            metadata: data.metadata,
                        })];
                case 2:
                    line = _c.sent();
                    return [4 /*yield*/, txCartService.addOrUpdateLineItems(cart.id, line, {
                            validateSalesChannels: featureFlagRouter.isFeatureEnabled("sales_channels"),
                        })];
                case 3:
                    _c.sent();
                    relations = __spreadArray(__spreadArray([], __read(index_1.defaultStoreCartRelations), false), [
                        "billing_address",
                        "region.payment_providers",
                        "payment_sessions",
                        "customer",
                    ], false);
                    shouldSetAvailability = (relations === null || relations === void 0 ? void 0 : relations.some(function (rel) { return rel.includes("variant"); })) &&
                        featureFlagRouter.isFeatureEnabled(sales_channels_1.default.key);
                    return [4 /*yield*/, txCartService.retrieveWithTotals(cart.id, {
                            select: index_1.defaultStoreCartFields,
                            relations: relations,
                        })];
                case 4:
                    cart = _c.sent();
                    if (!shouldSetAvailability) return [3 /*break*/, 6];
                    return [4 /*yield*/, productVariantInventoryService.setVariantAvailability(cart.items.map(function (i) { return i.variant; }), cart.sales_channel_id)];
                case 5:
                    _c.sent();
                    _c.label = 6;
                case 6:
                    if (!((_b = cart.payment_sessions) === null || _b === void 0 ? void 0 : _b.length)) return [3 /*break*/, 8];
                    return [4 /*yield*/, txCartService.setPaymentSessions(cart)];
                case 7:
                    _c.sent();
                    _c.label = 8;
                case 8: return [2 /*return*/, {
                        response_code: 200,
                        response_body: { cart: cart },
                    }];
            }
        });
    });
}
exports.handleAddOrUpdateLineItem = handleAddOrUpdateLineItem;
//# sourceMappingURL=handler-steps.js.map