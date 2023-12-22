"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerFulfillmentServiceFromClass = exports.registerAbstractFulfillmentServiceFromClass = exports.registerPaymentProcessorFromClass = exports.registerPaymentServiceFromClass = void 0;
var awilix_1 = require("awilix");
var medusa_interfaces_1 = require("medusa-interfaces");
var interfaces_1 = require("../../interfaces");
function registerPaymentServiceFromClass(klass, context) {
    var _a;
    if (!(0, interfaces_1.isPaymentService)(klass.prototype)) {
        return;
    }
    var container = context.container, pluginDetails = context.pluginDetails, registrationName = context.registrationName;
    container.registerAdd("paymentProviders", (0, awilix_1.asFunction)(function (cradle) { return new klass(cradle, pluginDetails.options); }, {
        lifetime: klass.LIFE_TIME || awilix_1.Lifetime.SINGLETON,
    }));
    container.register((_a = {},
        _a[registrationName] = (0, awilix_1.asFunction)(function (cradle) { return new klass(cradle, pluginDetails.options); }, {
            lifetime: klass.LIFE_TIME || awilix_1.Lifetime.SINGLETON,
        }),
        _a["pp_".concat(klass.identifier)] = (0, awilix_1.aliasTo)(registrationName),
        _a));
}
exports.registerPaymentServiceFromClass = registerPaymentServiceFromClass;
function registerPaymentProcessorFromClass(klass, context) {
    var _a;
    if (!(0, interfaces_1.isPaymentProcessor)(klass.prototype)) {
        return;
    }
    var container = context.container, pluginDetails = context.pluginDetails, registrationName = context.registrationName;
    container.registerAdd("paymentProviders", (0, awilix_1.asFunction)(function (cradle) { return new klass(cradle, pluginDetails.options); }, {
        lifetime: klass.LIFE_TIME || awilix_1.Lifetime.SINGLETON,
    }));
    container.register((_a = {},
        _a[registrationName] = (0, awilix_1.asFunction)(function (cradle) { return new klass(cradle, pluginDetails.options); }, {
            lifetime: klass.LIFE_TIME || awilix_1.Lifetime.SINGLETON,
        }),
        _a["pp_".concat(klass.identifier)] = (0, awilix_1.aliasTo)(registrationName),
        _a));
}
exports.registerPaymentProcessorFromClass = registerPaymentProcessorFromClass;
function registerAbstractFulfillmentServiceFromClass(klass, context) {
    var _a;
    if (!(klass.prototype instanceof interfaces_1.AbstractFulfillmentService)) {
        return;
    }
    var container = context.container, pluginDetails = context.pluginDetails, registrationName = context.registrationName;
    container.registerAdd("fulfillmentProviders", (0, awilix_1.asFunction)(function (cradle) { return new klass(cradle, pluginDetails.options); }, {
        lifetime: klass.LIFE_TIME || awilix_1.Lifetime.SINGLETON,
    }));
    container.register((_a = {},
        _a[registrationName] = (0, awilix_1.asFunction)(function (cradle) { return new klass(cradle, pluginDetails.options); }, {
            lifetime: klass.LIFE_TIME || awilix_1.Lifetime.SINGLETON,
        }),
        _a["fp_".concat(klass.identifier)] = (0, awilix_1.aliasTo)(registrationName),
        _a));
}
exports.registerAbstractFulfillmentServiceFromClass = registerAbstractFulfillmentServiceFromClass;
function registerFulfillmentServiceFromClass(klass, context) {
    var _a;
    if (!(klass.prototype instanceof medusa_interfaces_1.FulfillmentService)) {
        return;
    }
    var container = context.container, pluginDetails = context.pluginDetails, registrationName = context.registrationName;
    container.registerAdd("fulfillmentProviders", (0, awilix_1.asFunction)(function (cradle) { return new klass(cradle, pluginDetails.options); }, {
        lifetime: klass.LIFE_TIME || awilix_1.Lifetime.SINGLETON,
    }));
    container.register((_a = {},
        _a[registrationName] = (0, awilix_1.asFunction)(function (cradle) { return new klass(cradle, pluginDetails.options); }, {
            lifetime: klass.LIFE_TIME || awilix_1.Lifetime.SINGLETON,
        }),
        _a["fp_".concat(klass.identifier)] = (0, awilix_1.aliasTo)(registrationName),
        _a));
}
exports.registerFulfillmentServiceFromClass = registerFulfillmentServiceFromClass;
//# sourceMappingURL=plugins.js.map