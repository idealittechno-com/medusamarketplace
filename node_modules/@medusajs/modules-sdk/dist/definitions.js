"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODULE_DEFINITIONS = exports.ModulesDefinition = exports.MODULE_PACKAGE_NAMES = exports.ModuleRegistrationName = exports.Modules = void 0;
const types_1 = require("@medusajs/types");
var Modules;
(function (Modules) {
    Modules["EVENT_BUS"] = "eventBus";
    Modules["STOCK_LOCATION"] = "stockLocationService";
    Modules["INVENTORY"] = "inventoryService";
    Modules["CACHE"] = "cacheService";
    Modules["PRODUCT"] = "productService";
    Modules["PRICING"] = "pricingService";
})(Modules || (exports.Modules = Modules = {}));
var ModuleRegistrationName;
(function (ModuleRegistrationName) {
    ModuleRegistrationName["EVENT_BUS"] = "eventBusModuleService";
    ModuleRegistrationName["STOCK_LOCATION"] = "stockLocationService";
    ModuleRegistrationName["INVENTORY"] = "inventoryService";
    ModuleRegistrationName["CACHE"] = "cacheService";
    ModuleRegistrationName["PRODUCT"] = "productModuleService";
    ModuleRegistrationName["PRICING"] = "pricingModuleService";
})(ModuleRegistrationName || (exports.ModuleRegistrationName = ModuleRegistrationName = {}));
exports.MODULE_PACKAGE_NAMES = {
    [Modules.PRODUCT]: "@medusajs/product",
    [Modules.EVENT_BUS]: "@medusajs/event-bus-local",
    [Modules.STOCK_LOCATION]: "@medusajs/stock-location",
    [Modules.INVENTORY]: "@medusajs/inventory",
    [Modules.CACHE]: "@medusajs/cache-inmemory",
    [Modules.PRICING]: "@medusajs/pricing",
};
exports.ModulesDefinition = {
    [Modules.EVENT_BUS]: {
        key: Modules.EVENT_BUS,
        isLegacy: true,
        registrationName: ModuleRegistrationName.EVENT_BUS,
        defaultPackage: exports.MODULE_PACKAGE_NAMES[Modules.EVENT_BUS],
        label: "EventBusModuleService",
        canOverride: true,
        isRequired: true,
        dependencies: ["logger"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [Modules.STOCK_LOCATION]: {
        key: Modules.STOCK_LOCATION,
        isLegacy: true,
        registrationName: ModuleRegistrationName.STOCK_LOCATION,
        defaultPackage: false,
        label: "StockLocationService",
        isRequired: false,
        canOverride: true,
        isQueryable: true,
        dependencies: ["eventBusService"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [Modules.INVENTORY]: {
        key: Modules.INVENTORY,
        isLegacy: true,
        registrationName: ModuleRegistrationName.INVENTORY,
        defaultPackage: false,
        label: "InventoryService",
        isRequired: false,
        canOverride: true,
        isQueryable: true,
        dependencies: ["eventBusService"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [Modules.CACHE]: {
        key: Modules.CACHE,
        isLegacy: true,
        registrationName: ModuleRegistrationName.CACHE,
        defaultPackage: exports.MODULE_PACKAGE_NAMES[Modules.CACHE],
        label: "CacheService",
        isRequired: true,
        canOverride: true,
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [Modules.PRODUCT]: {
        key: Modules.PRODUCT,
        registrationName: ModuleRegistrationName.PRODUCT,
        defaultPackage: false,
        label: "ProductModuleService",
        isRequired: false,
        canOverride: true,
        isQueryable: true,
        dependencies: [ModuleRegistrationName.EVENT_BUS, "logger"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
    [Modules.PRICING]: {
        key: Modules.PRICING,
        registrationName: ModuleRegistrationName.PRICING,
        defaultPackage: false,
        label: "PricingModuleService",
        isRequired: false,
        canOverride: true,
        isQueryable: true,
        dependencies: ["logger"],
        defaultModuleDeclaration: {
            scope: types_1.MODULE_SCOPE.INTERNAL,
            resources: types_1.MODULE_RESOURCE_TYPE.SHARED,
        },
    },
};
exports.MODULE_DEFINITIONS = Object.values(exports.ModulesDefinition);
exports.default = exports.MODULE_DEFINITIONS;
//# sourceMappingURL=definitions.js.map