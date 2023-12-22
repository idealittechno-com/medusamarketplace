import { Context, DAL, FindConfig } from "@medusajs/types";
type RetrieveEntityParams<TDTO> = {
    id: string;
    identifierColumn?: string;
    entityName: string;
    repository: DAL.TreeRepositoryService | DAL.RepositoryService;
    config: FindConfig<TDTO>;
    sharedContext?: Context;
};
export declare function retrieveEntity<TEntity, TDTO>({ id, identifierColumn, entityName, repository, config, sharedContext, }: RetrieveEntityParams<TDTO>): Promise<TEntity>;
export {};
