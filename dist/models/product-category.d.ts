import { ProductCategory as MedusaProductCategory } from "@medusajs/medusa";
import { Store } from "./store";
export declare class ProductCategory extends MedusaProductCategory {
    store_id?: string;
    store?: Store;
    metadata: Record<string, unknown>;
}
