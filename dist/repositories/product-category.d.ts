import { ProductCategory } from "../models/product-category";
export declare const ProductCategoryRepository: import("typeorm").TreeRepository<ProductCategory> & {
    target: import("typeorm").EntityTarget<import("@medusajs/medusa").ProductCategory> & typeof ProductCategory;
    manager: import("typeorm").EntityManager;
    queryRunner?: import("typeorm").QueryRunner;
    findOneWithDescendants(query: import("typeorm").FindOneOptions<import("@medusajs/medusa").ProductCategory>, treeScope?: import("@medusajs/medusa").QuerySelector<import("@medusajs/medusa").ProductCategory>): Promise<import("@medusajs/medusa").ProductCategory>;
    getFreeTextSearchResultsAndCount(options?: import("@medusajs/medusa").ExtendedFindConfig<import("@medusajs/medusa").ProductCategory>, q?: string, treeScope?: import("@medusajs/medusa").QuerySelector<import("@medusajs/medusa").ProductCategory>, includeTree?: boolean): Promise<[import("@medusajs/medusa").ProductCategory[], number]>;
    addProducts(productCategoryId: string, productIds: string[]): Promise<void>;
    removeProducts(productCategoryId: string, productIds: string[]): Promise<import("typeorm").DeleteResult>;
};
export default ProductCategoryRepository;
