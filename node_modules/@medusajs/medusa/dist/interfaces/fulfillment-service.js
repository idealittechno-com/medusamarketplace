"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractFulfillmentService = void 0;
var AbstractFulfillmentService = /** @class */ (function () {
    function AbstractFulfillmentService(container, config // eslint-disable-next-line @typescript-eslint/no-empty-function
    ) {
        this.container = container;
        this.config = config;
    }
    AbstractFulfillmentService.prototype.getIdentifier = function () {
        var ctr = this.constructor;
        if (!ctr.identifier) {
            throw new Error("Missing static property \"identifier\".");
        }
        return ctr.identifier;
    };
    return AbstractFulfillmentService;
}());
exports.AbstractFulfillmentService = AbstractFulfillmentService;
exports.default = AbstractFulfillmentService;
//# sourceMappingURL=fulfillment-service.js.map