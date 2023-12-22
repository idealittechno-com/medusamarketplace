import { Context, FindOptions, ModuleJoinerConfig } from "@medusajs/types";
import { EntitySchema } from "@mikro-orm/core";
import { SqlEntityManager } from "@mikro-orm/postgresql";
export declare function getLinkRepository(model: EntitySchema): {
    new ({ manager, joinerConfig, }: {
        manager: SqlEntityManager;
        joinerConfig: ModuleJoinerConfig;
    }): {
        readonly manager_: SqlEntityManager;
        readonly model_: EntitySchema;
        readonly joinerConfig_: ModuleJoinerConfig;
        find(findOptions?: FindOptions<unknown>, context?: Context): Promise<unknown[]>;
        findAndCount(findOptions?: FindOptions<object>, context?: Context): Promise<[object[], number]>;
        delete(data: any, context?: Context): Promise<void>;
        create(data: object[], context?: Context): Promise<object[]>;
        update(data: unknown[], context?: Context | undefined): Promise<object[]>;
        softDelete(idsOrFilter: string[] | {
            [x: string]: any;
        }, { transactionManager: manager }?: Context | undefined): Promise<[object[], Record<string, unknown[]>]>;
        restore(idsOrFilter: string[] | {
            [x: string]: any;
        }, { transactionManager: manager }?: Context | undefined): Promise<[object[], Record<string, unknown[]>]>;
        applyFreeTextSearchFilters<T>(findOptions: FindOptions<T & {
            q?: string | undefined;
        }>, retrieveConstraintsToApply: (q: string) => any[]): void;
        getFreshManager<TManager = unknown>(): TManager;
        getActiveManager<TManager_1 = unknown>({ transactionManager, manager }?: Context | undefined): TManager_1;
        transaction<TManager_2 = unknown>(task: (transactionManager: TManager_2) => Promise<any>, options?: {
            isolationLevel?: string | undefined;
            enableNestedTransactions?: boolean | undefined;
            transaction?: TManager_2 | undefined;
        } | undefined): Promise<any>;
        serialize<TOutput extends object | object[]>(data: any, options?: any): Promise<TOutput>;
    };
};
