import { MedusaAppOutput } from "@medusajs/modules-sdk";
import { CommonTypes, InternalModuleDeclaration, MedusaContainer } from "@medusajs/types";
export declare function mergeDefaultModules(modulesConfig: CommonTypes.ConfigModule["modules"]): {
    [x: string]: boolean | Partial<InternalModuleDeclaration | import("@medusajs/modules-sdk").ExternalModuleDeclaration>;
};
export declare const loadMedusaApp: ({ configModule, container, }: {
    configModule: {
        modules?: CommonTypes.ConfigModule["modules"];
        projectConfig: CommonTypes.ConfigModule["projectConfig"];
    };
    container: MedusaContainer;
}, config?: {
    registerInContainer: boolean;
}) => Promise<MedusaAppOutput>;
export default loadMedusaApp;
