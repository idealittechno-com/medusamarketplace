import { Product } from "../models/product";
export declare const ProductRepository: import("typeorm").Repository<Product> & {
    target: import("typeorm").EntityTarget<import("@medusajs/medusa").Product> & typeof Product;
    manager: import("typeorm").EntityManager;
    queryRunner?: import("typeorm").QueryRunner;
    queryProducts(optionsWithoutRelations: import("@medusajs/medusa/dist/repositories/product").FindWithoutRelationsOptions, shouldCount?: boolean): Promise<[import("@medusajs/medusa").Product[], number]>;
    queryProductsWithIds({ entityIds, groupedRelations, withDeleted, select, order, where, }: {
        entityIds: string[];
        groupedRelations: {
            [toplevel: string]: string[];
        };
        withDeleted?: boolean;
        select?: (keyof import("@medusajs/medusa").Product)[];
        order?: {
            [column: string]: "ASC" | "DESC";
        };
        where?: import("typeorm").FindOptionsWhere<import("@medusajs/medusa").Product>;
    }): Promise<import("@medusajs/medusa").Product[]>;
    findWithRelationsAndCount(relations?: string[], idsOrOptionsWithoutRelations?: import("@medusajs/medusa/dist/repositories/product").FindWithoutRelationsOptions): Promise<[import("@medusajs/medusa").Product[], number]>;
    findWithRelations(relations?: string[], idsOrOptionsWithoutRelations?: string[] | import("@medusajs/medusa/dist/repositories/product").FindWithoutRelationsOptions, withDeleted?: boolean): Promise<import("@medusajs/medusa").Product[]>;
    findOneWithRelations(relations?: string[], optionsWithoutRelations?: import("@medusajs/medusa/dist/repositories/product").FindWithoutRelationsOptions): Promise<import("@medusajs/medusa").Product>;
    bulkAddToCollection(productIds: string[], collectionId: string): Promise<import("@medusajs/medusa").Product[]>;
    bulkRemoveFromCollection(productIds: string[], collectionId: string): Promise<import("@medusajs/medusa").Product[]>;
    getFreeTextSearchResultsAndCount(q: string, options?: import("@medusajs/medusa/dist/repositories/product").FindWithoutRelationsOptions, relations?: string[]): Promise<[import("@medusajs/medusa").Product[], number]>;
    getCategoryIdsFromInput(categoryId?: {
        value: string[];
    }, includeCategoryChildren?: boolean): Promise<string[]>;
    getCategoryIdsRecursively(productCategory: import("@medusajs/medusa").ProductCategory): string[];
    _findWithRelations({ relations, idsOrOptionsWithoutRelations, withDeleted, shouldCount, }: {
        relations: string[];
        idsOrOptionsWithoutRelations: string[] | import("@medusajs/medusa/dist/repositories/product").FindWithoutRelationsOptions;
        withDeleted: boolean;
        shouldCount: boolean;
    }): Promise<[import("@medusajs/medusa").Product[], number]>;
    isProductInSalesChannels(id: string, salesChannelIds: string[]): Promise<boolean>;
    _applyCategoriesQuery(qb: import("typeorm").SelectQueryBuilder<import("@medusajs/medusa").Product>, { alias, categoryAlias, where, joinName }: {
        alias: any;
        categoryAlias: any;
        where: any;
        joinName: any;
    }): import("typeorm").SelectQueryBuilder<import("@medusajs/medusa").Product>;
};
export default ProductRepository;
