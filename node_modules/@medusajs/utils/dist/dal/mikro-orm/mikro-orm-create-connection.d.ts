import { ModuleServiceInitializeOptions } from "@medusajs/types";
export declare function mikroOrmCreateConnection(database: ModuleServiceInitializeOptions["database"] & {
    connection?: any;
}, entities: any[], pathToMigrations: string): Promise<import("@mikro-orm/core").MikroORM<import("@mikro-orm/postgresql").PostgreSqlDriver>>;
