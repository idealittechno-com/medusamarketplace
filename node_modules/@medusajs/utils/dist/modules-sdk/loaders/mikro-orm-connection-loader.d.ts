import { Logger, MedusaContainer, ModulesSdkTypes } from "@medusajs/types";
export declare function mikroOrmConnectionLoader({ container, options, moduleDeclaration, entities, pathToMigrations, }: {
    entities: any[];
    container: MedusaContainer;
    options?: ModulesSdkTypes.ModuleServiceInitializeOptions | ModulesSdkTypes.ModuleServiceInitializeCustomDataLayerOptions;
    moduleDeclaration?: ModulesSdkTypes.InternalModuleDeclaration;
    logger?: Logger;
    pathToMigrations: string;
}): Promise<void>;
