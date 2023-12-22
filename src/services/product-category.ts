import { Lifetime } from "awilix"
import { 
  ProductCategoryService as MedusaProductService, Product, ProductCategory, User,
} from "@medusajs/medusa"
//import { CreateProductInput as MedusaCreateProductInput, FindProductConfig, ProductSelector as MedusaProductSelector } from "@medusajs/medusa/dist/types/product"
import {   } from "@medusajs/medusa/dist/types/product-category"
import {
  dataSource,
} from "@medusajs/medusa/dist/loaders/database"

// type ProductSelector = {
//   store_id?: string
// } & MedusaProductSelector

// type CreateProductInput = {
//   store_id?: string
// } & MedusaCreateProductInput

class ProductCategoryService extends MedusaProductService {
  static LIFE_TIME = Lifetime.SCOPED
  protected readonly loggedInUser_: User | null

  constructor(container, options) {
    // @ts-expect-error prefer-rest-params
    super(...arguments)

    try {
      this.loggedInUser_ = container.loggedInUser
    } catch (e) {
      // avoid errors when backend first runs
    }
  }

  // async list(selector: ProductSelector, config?: FindProductConfig): Promise<ProductCategory[]> {
  //   if (!selector.store_id && this.loggedInUser_?.store_id) {
  //     selector.store_id = this.loggedInUser_.store_id
  //   }
  //   // New added
  //   config.select?.push('store_id')
  //   config.relations?.push('store')

  //   return await super.list(selector, config)
  // }

  // async listAndCount(selector: ProductSelector, config?: FindProductConfig): Promise<[ProductCategory[], number]> {
  //   if (!selector.store_id && this.loggedInUser_?.store_id) {
  //     selector.store_id = this.loggedInUser_.store_id
  //   }
  //   config.select?.push('store_id')
  //   config.relations?.push('store')
  //   return await super.listAndCount(selector, config)
  // }

  // async retrieve(productId: string, config?: FindProductConfig): Promise<ProductCategory> {

  //   config.relations = [
  //     ...(config.relations || []),
  //     'store'
  //   ]
  //   // console.log("Product Id :=========",productId);
  //   // console.log("Product config :=========",config);
  //   // console.log("Product relations :=========",config.relations);
  //   // const product = await super.retrieve(productId, {
  //   //   // you can include other relations as well
  //   //   relations: ['id', 'store_id']
  //   //   })
  //   const product = await super.retrieve(productId, config);
  //   if (product.store?.id && this.loggedInUser_?.store_id && product.store.id !== this.loggedInUser_.store_id) {
  //     // Throw error if you don't want a product to be accessible to other stores
  //     throw new Error('Product does not exist in store.');
  //   }
  //   return product
  // }


  // async retrieveAll() {

  //   console.log("This is onyly for ttest");
  //   const productRepo = this.manager_.withRepository(this.productRepository_);
  //   // Previous logic not working for orderby Random
  //   // const products = await productRepo.find({
  //   //   relations: ["store"],
  //   //   take: 10,
  //   // }) 
  //   // Query by TypeORM 
  //   const products = await dataSource
  //   .getRepository(Product)
  //   .createQueryBuilder("product")
  //   .leftJoinAndSelect("product.store", "store")
  //   .where("product.store_id = store.id")
  //   .orderBy('RANDOM()')
  //   .limit(10)
  //   .getMany()
  //   return products;
  //  }


  // async create(productObject: CreateProductInput): Promise<Product> {
  //   if (!productObject.store_id && this.loggedInUser_?.store_id) {
  //     productObject.store_id = this.loggedInUser_.store_id
  //   }
  //   return await super.create(productObject);
  // }


}

export default ProductCategoryService