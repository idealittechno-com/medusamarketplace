import { Entity, JoinColumn, OneToMany } from "typeorm"
import { User } from "./user";
import { Product } from "./product";
import { ProductCategory } from "./product-category";
import { Order } from "./order";

import {
  Store as MedusaStore,
} from "@medusajs/medusa"

@Entity()
export class Store extends MedusaStore {
  @OneToMany(() => User, (user) => user?.store)
  members?: User[];
    
  @OneToMany(() => Product, (product) => product?.store)
  products?: Product[];

  @OneToMany(() => ProductCategory, (productCategory) => productCategory?.store)
  productCategory?: ProductCategory[];

  @OneToMany(() => Order, (order) => order.store)
  @JoinColumn({ name: 'id', referencedColumnName: 'store_id' })
  orders: Order[];
    
  // @OneToMany(() => Order, (order) => order?.store)
  // orders?: Order[];

}
