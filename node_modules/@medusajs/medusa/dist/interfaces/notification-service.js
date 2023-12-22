"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotificationService = exports.AbstractNotificationService = void 0;
var transaction_base_service_1 = require("./transaction-base-service");
var notification_service_1 = __importDefault(require("medusa-interfaces/dist/notification-service"));
var AbstractNotificationService = /** @class */ (function (_super) {
    __extends(AbstractNotificationService, _super);
    function AbstractNotificationService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractNotificationService.prototype.getIdentifier = function () {
        return this.constructor.identifier;
    };
    return AbstractNotificationService;
}(transaction_base_service_1.TransactionBaseService));
exports.AbstractNotificationService = AbstractNotificationService;
var isNotificationService = function (obj) {
    return (obj instanceof AbstractNotificationService ||
        obj instanceof notification_service_1.default);
};
exports.isNotificationService = isNotificationService;
//# sourceMappingURL=notification-service.js.map