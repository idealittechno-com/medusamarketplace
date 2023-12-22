import { FindConfig, StoreService as MedusaStoreService, Store, User } from "@medusajs/medusa";
declare class StoreService extends MedusaStoreService {
    static LIFE_TIME: import("awilix").LifetimeType;
    protected readonly loggedInUser_: User | null;
    constructor(container: any, options: any);
    retrieve(config?: FindConfig<Store>): Promise<Store>;
    retrieveAll(storeTyepe: any, searchStore: any, config?: FindConfig<Store>): Promise<Store[]>;
    retrieveForLoggedInUser(config?: FindConfig<Store>): Promise<Store>;
}
export default StoreService;
