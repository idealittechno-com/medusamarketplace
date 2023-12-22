"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniversalStorage = exports.getGlobalAnalytics = void 0;
var tslib_1 = require("tslib");
tslib_1.__exportStar(require("./core/analytics"), exports);
tslib_1.__exportStar(require("./browser"), exports);
tslib_1.__exportStar(require("./node"), exports);
tslib_1.__exportStar(require("./core/context"), exports);
tslib_1.__exportStar(require("./core/events"), exports);
tslib_1.__exportStar(require("./core/plugin"), exports);
tslib_1.__exportStar(require("./core/user"), exports);
var global_analytics_helper_1 = require("./lib/global-analytics-helper");
Object.defineProperty(exports, "getGlobalAnalytics", { enumerable: true, get: function () { return global_analytics_helper_1.getGlobalAnalytics; } });
var storage_1 = require("./core/storage");
Object.defineProperty(exports, "UniversalStorage", { enumerable: true, get: function () { return storage_1.UniversalStorage; } });
//# sourceMappingURL=index.js.map