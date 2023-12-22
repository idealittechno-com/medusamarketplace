"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSearchService = void 0;
var abstract_service_1 = require("./abstract-service");
function isSearchService(obj) {
    return obj instanceof abstract_service_1.AbstractSearchService;
}
exports.isSearchService = isSearchService;
//# sourceMappingURL=is-search-service.js.map