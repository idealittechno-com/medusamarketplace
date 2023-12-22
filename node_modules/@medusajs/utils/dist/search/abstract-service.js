"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSearchService = void 0;
var AbstractSearchService = /** @class */ (function () {
    function AbstractSearchService(container, options) {
        this.options_ = options;
    }
    Object.defineProperty(AbstractSearchService.prototype, "options", {
        get: function () {
            return this.options_;
        },
        enumerable: false,
        configurable: true
    });
    return AbstractSearchService;
}());
exports.AbstractSearchService = AbstractSearchService;
//# sourceMappingURL=abstract-service.js.map