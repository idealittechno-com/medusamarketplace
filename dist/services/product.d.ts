import { ProductService as MedusaProductService, Product, User } from "@medusajs/medusa";
import { CreateProductInput as MedusaCreateProductInput, FindProductConfig, ProductSelector as MedusaProductSelector } from "@medusajs/medusa/dist/types/product";
type ProductSelector = {
    store_id?: string;
} & MedusaProductSelector;
type CreateProductInput = {
    store_id?: string;
} & MedusaCreateProductInput;
declare class ProductService extends MedusaProductService {
    static LIFE_TIME: import("awilix").LifetimeType;
    protected readonly loggedInUser_: User | null;
    constructor(container: any, options: any);
    list(selector: ProductSelector, config?: FindProductConfig): Promise<Product[]>;
    listAndCount(selector: ProductSelector, config?: FindProductConfig): Promise<[Product[], number]>;
    retrieve(productId: string, config?: FindProductConfig): Promise<Product>;
    retrieveAll(): Promise<Product[]>;
    create(productObject: CreateProductInput): Promise<Product>;
}
export default ProductService;
