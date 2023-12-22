import { User } from "./user";
import { Product } from "./product";
import { ProductCategory } from "./product-category";
import { Order } from "./order";
import { Store as MedusaStore } from "@medusajs/medusa";
export declare class Store extends MedusaStore {
    members?: User[];
    products?: Product[];
    productCategory?: ProductCategory[];
    orders: Order[];
}
