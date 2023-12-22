import { Logger, MedusaContainer, ModuleResolution } from "@medusajs/types";
export declare function loadInternalModule(container: MedusaContainer, resolution: ModuleResolution, logger: Logger): Promise<{
    error?: Error;
} | void>;
export declare function loadModuleMigrations(resolution: ModuleResolution): Promise<[Function | undefined, Function | undefined]>;
