import { NextFunction, Request, Response } from "express";
import { ClassConstructor } from "../../types/global";
import { ValidatorOptions } from "class-validator";
import { BaseEntity } from "../../interfaces";
import { QueryConfig, RequestQueryFields } from "../../types/common";
/**
 * Middleware that transform the query input for the admin end points
 * @param plainToClass
 * @param queryConfig
 * @param config
 */
export declare function transformQuery<T extends RequestQueryFields, TEntity extends BaseEntity>(plainToClass: ClassConstructor<T>, queryConfig?: Omit<QueryConfig<TEntity>, "allowedRelations" | "allowedFields">, config?: ValidatorOptions): (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * Middleware that transform the query input for the store endpoints
 * @param plainToClass
 * @param queryConfig
 * @param config
 */
export declare function transformStoreQuery<T extends RequestQueryFields, TEntity extends BaseEntity>(plainToClass: ClassConstructor<T>, queryConfig?: QueryConfig<TEntity>, config?: ValidatorOptions): (req: Request, res: Response, next: NextFunction) => Promise<void>;
