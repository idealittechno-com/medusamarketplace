import { ModuleJoinerConfig, RemoteExpandProperty, RemoteJoinerQuery } from "@medusajs/types";
export type RemoteFetchDataCallback = (expand: RemoteExpandProperty, keyField: string, ids?: (unknown | unknown[])[], relationship?: any) => Promise<{
    data: unknown[] | {
        [path: string]: unknown;
    };
    path?: string;
}>;
export declare class RemoteJoiner {
    private serviceConfigs;
    private remoteFetchData;
    private serviceConfigCache;
    private implodeMapping;
    private static filterFields;
    private static getNestedItems;
    private static createRelatedDataMap;
    static parseQuery(graphqlQuery: string, variables?: Record<string, unknown>): RemoteJoinerQuery;
    constructor(serviceConfigs: ModuleJoinerConfig[], remoteFetchData: RemoteFetchDataCallback);
    setFetchDataCallback(remoteFetchData: RemoteFetchDataCallback): void;
    private buildReferences;
    private getServiceConfig;
    private cacheServiceConfig;
    private fetchData;
    private handleFieldAliases;
    private handleExpands;
    private expandProperty;
    private expandRelationshipProperty;
    private parseExpands;
    private parseProperties;
    private groupExpands;
    query(queryObj: RemoteJoinerQuery): Promise<any>;
}
