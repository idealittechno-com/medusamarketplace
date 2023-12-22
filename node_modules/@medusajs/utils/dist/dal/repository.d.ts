import { Context, DAL, RepositoryTransformOptions } from "@medusajs/types";
declare class AbstractBase<T = any> {
    protected readonly manager_: any;
    protected constructor({ manager }: {
        manager: any;
    });
    getActiveManager<TManager = unknown>({ transactionManager, manager }?: Context): TManager;
    transaction<TManager = unknown>(task: (transactionManager: TManager) => Promise<any>, { transaction, isolationLevel, enableNestedTransactions, }?: {
        isolationLevel?: string;
        enableNestedTransactions?: boolean;
        transaction?: TManager;
    }): Promise<any>;
}
export declare abstract class AbstractBaseRepository<T = any> extends AbstractBase implements DAL.RepositoryService<T> {
    abstract find(options?: DAL.FindOptions<T>, context?: Context): any;
    abstract findAndCount(options?: DAL.FindOptions<T>, context?: Context): Promise<[T[], number]>;
    abstract create(data: unknown[], context?: Context): Promise<T[]>;
    abstract update(data: unknown[], context?: Context): Promise<T[]>;
    abstract delete(ids: string[], context?: Context): Promise<void>;
    abstract softDelete(ids: string[], context?: Context): Promise<[T[], Record<string, unknown[]>]>;
    abstract restore(ids: string[], context?: Context): Promise<[T[], Record<string, unknown[]>]>;
    abstract getFreshManager<TManager = unknown>(): TManager;
    abstract serialize<TOutput extends object | object[]>(data: any, options?: any): Promise<TOutput>;
}
export declare abstract class AbstractTreeRepositoryBase<T = any> extends AbstractBase<T> implements DAL.TreeRepositoryService<T> {
    protected constructor({ manager }: {
        manager: any;
    });
    abstract find(options?: DAL.FindOptions<T>, transformOptions?: RepositoryTransformOptions, context?: Context): any;
    abstract findAndCount(options?: DAL.FindOptions<T>, transformOptions?: RepositoryTransformOptions, context?: Context): Promise<[T[], number]>;
    abstract create(data: unknown, context?: Context): Promise<T>;
    abstract delete(id: string, context?: Context): Promise<void>;
    abstract getFreshManager<TManager = unknown>(): TManager;
    abstract serialize<TOutput extends object | object[]>(data: any, options?: any): Promise<TOutput>;
}
export {};
