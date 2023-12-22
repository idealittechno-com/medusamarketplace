"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectManager = void 0;
function InjectManager(managerProperty) {
    return function (target, propertyKey, descriptor) {
        if (!target.MedusaContextIndex_) {
            throw new Error("To apply @InjectManager you have to flag a parameter using @MedusaContext");
        }
        var originalMethod = descriptor.value;
        var argIndex = target.MedusaContextIndex_[propertyKey];
        descriptor.value = function () {
            var _a, _b;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var context = __assign({}, ((_a = args[argIndex]) !== null && _a !== void 0 ? _a : {}));
            var resourceWithManager = !managerProperty
                ? this
                : this[managerProperty];
            context.manager = (_b = context.manager) !== null && _b !== void 0 ? _b : resourceWithManager.getFreshManager();
            args[argIndex] = context;
            return originalMethod.apply(this, args);
        };
    };
}
exports.InjectManager = InjectManager;
//# sourceMappingURL=inject-manager.js.map