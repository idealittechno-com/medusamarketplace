import { Context, DAL, FilterQuery, RepositoryTransformOptions } from "@medusajs/types";
export declare class MikroOrmBase<T = any> {
    protected readonly manager_: any;
    protected constructor({ manager }: {
        manager: any;
    });
    getFreshManager<TManager = unknown>(): TManager;
    getActiveManager<TManager = unknown>({ transactionManager, manager }?: Context): TManager;
    transaction<TManager = unknown>(task: (transactionManager: TManager) => Promise<any>, options?: {
        isolationLevel?: string;
        enableNestedTransactions?: boolean;
        transaction?: TManager;
    }): Promise<any>;
    serialize<TOutput extends object | object[]>(data: any, options?: any): Promise<TOutput>;
}
export declare abstract class MikroOrmAbstractBaseRepository<T = any> extends MikroOrmBase implements DAL.RepositoryService<T> {
    abstract find(options?: DAL.FindOptions<T>, context?: Context): any;
    abstract findAndCount(options?: DAL.FindOptions<T>, context?: Context): Promise<[T[], number]>;
    abstract create(data: unknown[], context?: Context): Promise<T[]>;
    update(data: unknown[], context?: Context): Promise<T[]>;
    abstract delete(ids: string[], context?: Context): Promise<void>;
    softDelete(idsOrFilter: string[] | FilterQuery, { transactionManager: manager }?: Context): Promise<[T[], Record<string, unknown[]>]>;
    restore(idsOrFilter: string[] | FilterQuery, { transactionManager: manager }?: Context): Promise<[T[], Record<string, unknown[]>]>;
    applyFreeTextSearchFilters<T>(findOptions: DAL.FindOptions<T & {
        q?: string;
    }>, retrieveConstraintsToApply: (q: string) => any[]): void;
}
export declare abstract class MikroOrmAbstractTreeRepositoryBase<T = any> extends MikroOrmBase<T> implements DAL.TreeRepositoryService<T> {
    protected constructor({ manager }: {
        manager: any;
    });
    abstract find(options?: DAL.FindOptions<T>, transformOptions?: RepositoryTransformOptions, context?: Context): any;
    abstract findAndCount(options?: DAL.FindOptions<T>, transformOptions?: RepositoryTransformOptions, context?: Context): Promise<[T[], number]>;
    abstract create(data: unknown, context?: Context): Promise<T>;
    abstract delete(id: string, context?: Context): Promise<void>;
}
/**
 * Privileged extends of the abstract classes unless most of the methods can't be implemented
 * in your repository. This base repository is also used to provide a base repository
 * injection if needed to be able to use the common methods without being related to an entity.
 * In this case, none of the method will be implemented except the manager and transaction
 * related ones.
 */
export declare class MikroOrmBaseRepository extends MikroOrmAbstractBaseRepository {
    constructor({ manager }: {
        manager: any;
    });
    create(data: unknown[], context?: Context): Promise<any[]>;
    update(data: unknown[], context?: Context): Promise<any[]>;
    delete(ids: string[], context?: Context): Promise<void>;
    find(options?: DAL.FindOptions, context?: Context): Promise<any[]>;
    findAndCount(options?: DAL.FindOptions, context?: Context): Promise<[any[], number]>;
}
export declare class MikroOrmBaseTreeRepository extends MikroOrmAbstractTreeRepositoryBase {
    constructor({ manager }: {
        manager: any;
    });
    find(options?: DAL.FindOptions, transformOptions?: RepositoryTransformOptions, context?: Context): Promise<any[]>;
    findAndCount(options?: DAL.FindOptions, transformOptions?: RepositoryTransformOptions, context?: Context): Promise<[any[], number]>;
    create(data: unknown, context?: Context): Promise<any>;
    delete(id: string, context?: Context): Promise<void>;
}
