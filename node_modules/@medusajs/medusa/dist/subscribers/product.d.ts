import { IEventBusService, ISearchService } from "@medusajs/types";
import ProductService from "../services/product";
type InjectedDependencies = {
    eventBusService: IEventBusService;
    searchService: ISearchService;
    productService: ProductService;
};
declare class ProductSearchSubscriber {
    private readonly eventBusService_;
    private readonly searchService_;
    private readonly productService_;
    constructor(container: InjectedDependencies);
    handleProductCreation: (data: any) => Promise<void>;
    handleProductUpdate: (data: any) => Promise<void>;
    handleProductDeletion: (data: any) => Promise<void>;
    handleProductVariantChange: (data: any) => Promise<void>;
}
export default ProductSearchSubscriber;
