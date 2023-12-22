"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPaymentProcessorError = exports.isPaymentProcessor = exports.AbstractPaymentProcessor = void 0;
/**
 * Payment processor in charge of creating , managing and processing a payment
 */
var AbstractPaymentProcessor = /** @class */ (function () {
    function AbstractPaymentProcessor(container, config // eslint-disable-next-line @typescript-eslint/no-empty-function
    ) {
        this.container = container;
        this.config = config;
    }
    AbstractPaymentProcessor.prototype.getIdentifier = function () {
        var ctr = this.constructor;
        if (!ctr.identifier) {
            throw new Error("Missing static property \"identifier\".");
        }
        return ctr.identifier;
    };
    return AbstractPaymentProcessor;
}());
exports.AbstractPaymentProcessor = AbstractPaymentProcessor;
/**
 * Return if the input object is AbstractPaymentProcessor
 * @param obj
 */
function isPaymentProcessor(obj) {
    return obj instanceof AbstractPaymentProcessor;
}
exports.isPaymentProcessor = isPaymentProcessor;
/**
 * Utility function to determine if an object is a processor error
 * @param obj
 */
function isPaymentProcessorError(obj) {
    return obj && typeof obj === "object" && (obj.error || obj.code || obj.detail);
}
exports.isPaymentProcessorError = isPaymentProcessorError;
//# sourceMappingURL=payment-processor.js.map