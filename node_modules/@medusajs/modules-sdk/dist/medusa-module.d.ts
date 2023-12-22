import { ExternalModuleDeclaration, InternalModuleDeclaration, LinkModuleDefinition, LoadedModule, MedusaContainer, ModuleDefinition, ModuleExports, ModuleJoinerConfig, ModuleResolution } from "@medusajs/types";
declare global {
    interface MedusaModule {
        getLoadedModules(aliases?: Map<string, string>): {
            [key: string]: LoadedModule;
        }[];
        getModuleInstance(moduleKey: string, alias?: string): LoadedModule;
    }
}
export type ModuleBootstrapOptions = {
    moduleKey: string;
    defaultPath: string;
    declaration?: InternalModuleDeclaration | ExternalModuleDeclaration;
    moduleExports?: ModuleExports;
    sharedContainer?: MedusaContainer;
    moduleDefinition?: ModuleDefinition;
    injectedDependencies?: Record<string, any>;
};
export type LinkModuleBootstrapOptions = {
    definition: LinkModuleDefinition;
    declaration?: InternalModuleDeclaration;
    moduleExports?: ModuleExports;
    injectedDependencies?: Record<string, any>;
};
export declare class MedusaModule {
    private static instances_;
    private static modules_;
    private static loading_;
    private static joinerConfig_;
    private static moduleResolutions_;
    static getLoadedModules(aliases?: Map<string, string>): {
        [key: string]: LoadedModule;
    }[];
    static clearInstances(): void;
    static isInstalled(moduleKey: string, alias?: string): boolean;
    static getJoinerConfig(moduleKey: string): ModuleJoinerConfig;
    static getAllJoinerConfigs(): ModuleJoinerConfig[];
    static getModuleResolutions(moduleKey: string): ModuleResolution;
    static getAllModuleResolutions(): ModuleResolution[];
    static setModuleResolution(moduleKey: string, resolution: ModuleResolution): ModuleResolution;
    static setJoinerConfig(moduleKey: string, config: ModuleJoinerConfig): ModuleJoinerConfig;
    static getModuleInstance(moduleKey: string, alias?: string): any | undefined;
    private static registerModule;
    static bootstrap<T>({ moduleKey, defaultPath, declaration, moduleExports, sharedContainer, moduleDefinition, injectedDependencies, }: ModuleBootstrapOptions): Promise<{
        [key: string]: T;
    }>;
    static bootstrapLink({ definition, declaration, moduleExports, injectedDependencies, }: LinkModuleBootstrapOptions): Promise<{
        [key: string]: unknown;
    }>;
    static migrateUp(moduleKey: string, modulePath: string, options?: Record<string, any>): Promise<void>;
    static migrateDown(moduleKey: string, modulePath: string, options?: Record<string, any>): Promise<void>;
}
