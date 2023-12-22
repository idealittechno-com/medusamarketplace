import { Column, Entity, Index, JoinColumn,Tree, ManyToOne } from "typeorm"
import {
  DbAwareColumn, ProductCategory as MedusaProductCategory,
} from "@medusajs/medusa"
import { Store } from "./store";

@Entity()
@Tree("materialized-path")
export class ProductCategory extends MedusaProductCategory {
  @Index("ProductStoreId")
  @Column({ nullable: true })
  store_id?: string;

  @ManyToOne(() => Store, (store) => store.products)
  @JoinColumn({ name: 'store_id', referencedColumnName: 'id' })
  store?: Store;
  
  @DbAwareColumn({ type: "jsonb", nullable: true })
  metadata: Record<string, unknown>
  
}