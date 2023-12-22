import { ProductCategoryService as MedusaProductService, User } from "@medusajs/medusa";
declare class ProductCategoryService extends MedusaProductService {
    static LIFE_TIME: import("awilix").LifetimeType;
    protected readonly loggedInUser_: User | null;
    constructor(container: any, options: any);
}
export default ProductCategoryService;
