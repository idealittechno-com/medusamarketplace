import { Lifetime } from "awilix"
import { 
  FindConfig,
  StoreService as MedusaStoreService, Product, Store, User,buildQuery
} from "@medusajs/medusa"
import { dataSource } from "@medusajs/medusa/dist/loaders/database"
import { Like } from "typeorm"


class StoreService extends MedusaStoreService {
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

  async retrieve(config?: FindConfig<Store>): Promise<Store> {

    if (!this.loggedInUser_) {
      console.log('==============================noooooooooooooo====================');
      return super.retrieve(config);
    }
    return this.retrieveForLoggedInUser(config);
  }

  async retrieveAll(storeTyepe, searchStore, config?: FindConfig<Store>) {
    
    console.log("Retrive All :==================",storeTyepe);
    const storeRepo = this.manager_.withRepository(this.storeRepository_);

    if(storeTyepe > 0) {
      if(searchStore!='' ) {
        const store = await storeRepo.find({
          where: { 
            name : Like(`%${searchStore}%`)
          } 
        })
        return store;
      } else {
        const store = await storeRepo.find()
        return store;
      }
    } else if(searchStore!='' ) {
      const store = await storeRepo.find({
        where: { 
          name : searchStore
        } 
      })
      return store;
     } else {
      const store = await storeRepo.find({
        relations: ["products"],
      })
      return store;
    }
   }

  async retrieveForLoggedInUser (config?: FindConfig<Store>) {
    const storeRepo = this.manager_.withRepository(this.storeRepository_);
    const store = await storeRepo.findOne({
        ...config,
        relations: [
          ...config.relations,
          'members'
        ],
        where: {
          id: this.loggedInUser_.store_id
        },
    });

    if (!store) {
        throw new Error('Unable to find the user store');
    }

    return store
  }
}

export default StoreService