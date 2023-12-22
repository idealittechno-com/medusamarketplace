"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const medusa_1 = require("@medusajs/medusa");
const database_1 = require("@medusajs/medusa/dist/loaders/database");
class ProductService extends medusa_1.ProductService {
    constructor(container, options) {
        // @ts-expect-error prefer-rest-params
        super(...arguments);
        try {
            this.loggedInUser_ = container.loggedInUser;
        }
        catch (e) {
            // avoid errors when backend first runs
        }
    }
    async list(selector, config) {
        var _a, _b, _c;
        if (!selector.store_id && ((_a = this.loggedInUser_) === null || _a === void 0 ? void 0 : _a.store_id)) {
            selector.store_id = this.loggedInUser_.store_id;
        }
        // New added
        (_b = config.select) === null || _b === void 0 ? void 0 : _b.push('store_id');
        (_c = config.relations) === null || _c === void 0 ? void 0 : _c.push('store');
        return await super.list(selector, config);
    }
    async listAndCount(selector, config) {
        var _a, _b, _c;
        if (!selector.store_id && ((_a = this.loggedInUser_) === null || _a === void 0 ? void 0 : _a.store_id)) {
            selector.store_id = this.loggedInUser_.store_id;
        }
        (_b = config.select) === null || _b === void 0 ? void 0 : _b.push('store_id');
        (_c = config.relations) === null || _c === void 0 ? void 0 : _c.push('store');
        return await super.listAndCount(selector, config);
    }
    async retrieve(productId, config) {
        var _a, _b;
        config.relations = [
            ...(config.relations || []),
            'store'
        ];
        // console.log("Product Id :=========",productId);
        // console.log("Product config :=========",config);
        // console.log("Product relations :=========",config.relations);
        // const product = await super.retrieve(productId, {
        //   // you can include other relations as well
        //   relations: ['id', 'store_id']
        //   })
        const product = await super.retrieve(productId, config);
        if (((_a = product.store) === null || _a === void 0 ? void 0 : _a.id) && ((_b = this.loggedInUser_) === null || _b === void 0 ? void 0 : _b.store_id) && product.store.id !== this.loggedInUser_.store_id) {
            // Throw error if you don't want a product to be accessible to other stores
            throw new Error('Product does not exist in store.');
        }
        return product;
    }
    async retrieveAll() {
        console.log("This is onyly for ttest");
        const productRepo = this.manager_.withRepository(this.productRepository_);
        // Previous logic not working for orderby Random
        // const products = await productRepo.find({
        //   relations: ["store"],
        //   take: 10,
        // }) 
        // Query by TypeORM 
        const products = await database_1.dataSource
            .getRepository(medusa_1.Product)
            .createQueryBuilder("product")
            .leftJoinAndSelect("product.store", "store")
            .where("product.store_id = store.id")
            .orderBy('RANDOM()')
            .limit(10)
            .getMany();
        return products;
    }
    async create(productObject) {
        var _a;
        if (!productObject.store_id && ((_a = this.loggedInUser_) === null || _a === void 0 ? void 0 : _a.store_id)) {
            productObject.store_id = this.loggedInUser_.store_id;
        }
        return await super.create(productObject);
    }
}
ProductService.LIFE_TIME = awilix_1.Lifetime.SCOPED;
exports.default = ProductService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9wcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQWlDO0FBQ2pDLDZDQUV5QjtBQUV6QixxRUFFK0M7QUFVL0MsTUFBTSxjQUFlLFNBQVEsdUJBQW9CO0lBSS9DLFlBQVksU0FBUyxFQUFFLE9BQU87UUFDNUIsc0NBQXNDO1FBQ3RDLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFBO1FBRW5CLElBQUk7WUFDRixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUE7U0FDNUM7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLHVDQUF1QztTQUN4QztJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQXlCLEVBQUUsTUFBMEI7O1FBQzlELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxLQUFJLE1BQUEsSUFBSSxDQUFDLGFBQWEsMENBQUUsUUFBUSxDQUFBLEVBQUU7WUFDdEQsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQTtTQUNoRDtRQUNELFlBQVk7UUFDWixNQUFBLE1BQU0sQ0FBQyxNQUFNLDBDQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUMvQixNQUFBLE1BQU0sQ0FBQyxTQUFTLDBDQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUUvQixPQUFPLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBeUIsRUFBRSxNQUEwQjs7UUFDdEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEtBQUksTUFBQSxJQUFJLENBQUMsYUFBYSwwQ0FBRSxRQUFRLENBQUEsRUFBRTtZQUN0RCxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FB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