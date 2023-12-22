import { CommonTypes } from "@medusajs/types";
import { Request } from "express";
import { MedusaContainer as coreMedusaContainer } from "medusa-core-utils";
import { Customer, User } from "../models";
import { FindConfig, RequestQueryFields } from "./common";
declare global {
    namespace Express {
        interface Request {
            user?: (User | Customer) & {
                customer_id?: string;
                userId?: string;
            };
            scope: MedusaContainer;
            validatedQuery: RequestQueryFields & Record<string, unknown>;
            validatedBody: unknown;
            listConfig: FindConfig<unknown>;
            retrieveConfig: FindConfig<unknown>;
            filterableFields: Record<string, unknown>;
            allowedProperties: string[];
            includes?: Record<string, boolean>;
            errors: string[];
        }
    }
}
export type ExtendedRequest<TEntity> = Request & {
    resource: TEntity;
};
export type ClassConstructor<T> = {
    new (...args: unknown[]): T;
};
export type MedusaContainer = coreMedusaContainer;
export type Logger = {
    panic: (data: any) => void;
    shouldLog: (level: string) => void;
    setLogLevel: (level: string) => void;
    unsetLogLevel: () => void;
    activity: (message: string, config?: any) => void;
    progress: (activityId: any, message: any) => void;
    error: (messageOrError: any, error?: any) => void;
    failure: (activityId: any, message: any) => void;
    success: (activityId: any, message: any) => void;
    debug: (message: any) => void;
    info: (message: any) => void;
    warn: (message: any) => void;
    log: (...args: any[]) => void;
};
export type Constructor<T> = new (...args: any[]) => T;
export type ConfigModule = CommonTypes.ConfigModule;
