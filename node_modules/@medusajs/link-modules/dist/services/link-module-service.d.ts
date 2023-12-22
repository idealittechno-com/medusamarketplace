import { Context, DAL, FindConfig, ILinkModule, InternalModuleDeclaration, ModuleJoinerConfig, RestoreReturn, SoftDeleteReturn } from "@medusajs/types";
import { LinkService } from ".";
type InjectedDependencies = {
    baseRepository: DAL.RepositoryService;
    linkService: LinkService<any>;
    primaryKey: string | string[];
    foreignKey: string;
    extraFields: string[];
};
export default class LinkModuleService<TLink> implements ILinkModule {
    readonly moduleDeclaration: InternalModuleDeclaration;
    protected baseRepository_: DAL.RepositoryService;
    protected readonly linkService_: LinkService<TLink>;
    protected primaryKey_: string[];
    protected foreignKey_: string;
    protected extraFields_: string[];
    constructor({ baseRepository, linkService, primaryKey, foreignKey, extraFields, }: InjectedDependencies, moduleDeclaration: InternalModuleDeclaration);
    __joinerConfig(): ModuleJoinerConfig;
    private buildData;
    private isValidKeyName;
    private validateFields;
    retrieve(primaryKeyData: string | string[], foreignKeyData: string, sharedContext?: Context): Promise<unknown>;
    list(filters?: Record<string, unknown>, config?: FindConfig<unknown>, sharedContext?: Context): Promise<unknown[]>;
    listAndCount(filters?: Record<string, unknown>, config?: FindConfig<unknown>, sharedContext?: Context): Promise<[unknown[], number]>;
    create(primaryKeyOrBulkData: string | string[] | [string | string[], string, Record<string, unknown>][], foreignKeyData?: string, extraFields?: Record<string, unknown>, sharedContext?: Context): Promise<object[]>;
    dismiss(primaryKeyOrBulkData: string | string[] | [string | string[], string][], foreignKeyData?: string, sharedContext?: Context): Promise<object[]>;
    delete(data: any, sharedContext?: Context): Promise<void>;
    softDelete(data: any, { returnLinkableKeys }?: SoftDeleteReturn, sharedContext?: Context): Promise<Record<string, unknown[]> | void>;
    protected softDelete_(data: any, sharedContext?: Context): Promise<[string[], Record<string, string[]>]>;
    restore(data: any, { returnLinkableKeys }?: RestoreReturn, sharedContext?: Context): Promise<Record<string, unknown[]> | void>;
    restore_(data: any, sharedContext?: Context): Promise<[string[], Record<string, string[]>]>;
}
export {};
