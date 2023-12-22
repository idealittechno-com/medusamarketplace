import { ModuleDefinition } from "@medusajs/types";
export declare enum Modules {
    EVENT_BUS = "eventBus",
    STOCK_LOCATION = "stockLocationService",
    INVENTORY = "inventoryService",
    CACHE = "cacheService",
    PRODUCT = "productService",
    PRICING = "pricingService"
}
export declare enum ModuleRegistrationName {
    EVENT_BUS = "eventBusModuleService",
    STOCK_LOCATION = "stockLocationService",
    INVENTORY = "inventoryService",
    CACHE = "cacheService",
    PRODUCT = "productModuleService",
    PRICING = "pricingModuleService"
}
export declare const MODULE_PACKAGE_NAMES: {
    productService: string;
    eventBus: string;
    stockLocationService: string;
    inventoryService: string;
    cacheService: string;
    pricingService: string;
};
export declare const ModulesDefinition: {
    [key: string | Modules]: ModuleDefinition;
};
export declare const MODULE_DEFINITIONS: ModuleDefinition[];
export default MODULE_DEFINITIONS;
