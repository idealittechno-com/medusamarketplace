import { Logger, MedusaContainer, ModuleResolution } from "@medusajs/types";
export declare const moduleLoader: ({ container, moduleResolutions, logger, }: {
    container: MedusaContainer;
    moduleResolutions: Record<string, ModuleResolution>;
    logger: Logger;
}) => Promise<void>;
