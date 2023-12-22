import { Product as MedusaProduct } from "@medusajs/medusa";
import { Store } from "./store";
export declare class Product extends MedusaProduct {
    store_id?: string;
    store?: Store;
}
