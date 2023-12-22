"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const medusa_1 = require("@medusajs/medusa");
const typeorm_1 = require("typeorm");
class StoreService extends medusa_1.StoreService {
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
    async retrieve(config) {
        if (!this.loggedInUser_) {
            console.log('==============================noooooooooooooo====================');
            return super.retrieve(config);
        }
        return this.retrieveForLoggedInUser(config);
    }
    async retrieveAll(storeTyepe, searchStore, config) {
        console.log("Retrive All :==================", storeTyepe);
        const storeRepo = this.manager_.withRepository(this.storeRepository_);
        if (storeTyepe > 0) {
            if (searchStore != '') {
                const store = await storeRepo.find({
                    where: {
                        name: (0, typeorm_1.Like)(`%${searchStore}%`)
                    }
                });
                return store;
            }
            else {
                const store = await storeRepo.find();
                return store;
            }
        }
        else if (searchStore != '') {
            const store = await storeRepo.find({
                where: {
                    name: searchStore
                }
            });
            return store;
        }
        else {
            const store = await storeRepo.find({
                relations: ["products"],
            });
            return store;
        }
    }
    async retrieveForLoggedInUser(config) {
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
        return store;
    }
}
StoreService.LIFE_TIME = awilix_1.Lifetime.SCOPED;
exports.default = StoreService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBaUM7QUFDakMsNkNBR3lCO0FBRXpCLHFDQUE4QjtBQUc5QixNQUFNLFlBQWEsU0FBUSxxQkFBa0I7SUFJM0MsWUFBWSxTQUFTLEVBQUUsT0FBTztRQUM1QixzQ0FBc0M7UUFDdEMsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUE7UUFFbkIsSUFBSTtZQUNGLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQTtTQUM1QztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsdUNBQXVDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBMEI7UUFFdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO1lBQ2pGLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvQjtRQUNELE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBMEI7UUFFbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBQyxVQUFVLENBQUMsQ0FBQztRQUMxRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUV0RSxJQUFHLFVBQVUsR0FBRyxDQUFDLEVBQUU7WUFDakIsSUFBRyxXQUFXLElBQUUsRUFBRSxFQUFHO2dCQUNuQixNQUFNLEtBQUssR0FBRyxNQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUM7b0JBQ2pDLEtBQUssRUFBRTt3QkFDTCxJQUFJLEVBQUcsSUFBQSxjQUFJLEVBQUMsSUFBSSxXQUFXLEdBQUcsQ0FBQztxQkFDaEM7aUJBQ0YsQ0FBQyxDQUFBO2dCQUNGLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7aUJBQU07Z0JBQ0wsTUFBTSxLQUFLLEdBQUcsTUFBTSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUE7Z0JBQ3BDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjthQUFNLElBQUcsV0FBVyxJQUFFLEVBQUUsRUFBRztZQUMxQixNQUFNLEtBQUssR0FBRyxNQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pDLEtBQUssRUFBRTtvQkFDTCxJQUFJLEVBQUcsV0FBVztpQkFDbkI7YUFDRixDQUFDLENBQUE7WUFDRixPQUFPLEtBQUssQ0FBQztTQUNiO2FBQU07WUFDTixNQUFNLEtBQUssR0FBRyxNQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQzthQUN4QixDQUFDLENBQUE7WUFDRixPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0YsQ0FBQztJQUVGLEtBQUssQ0FBQyx1QkFBdUIsQ0FBRSxNQUEwQjtRQUN2RCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN0RSxNQUFNLEtBQUssR0FBRyxNQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDbEMsR0FBRyxNQUFNO1lBQ1QsU0FBUyxFQUFFO2dCQUNULEdBQUcsTUFBTSxDQUFDLFNBQVM7Z0JBQ25CLFNBQVM7YUFDVjtZQUNELEtBQUssRUFBRTtnQkFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRO2FBQ2hDO1NBQ0osQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUNwRDtRQUVELE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQzs7QUF6RU0sc0JBQVMsR0FBRyxpQkFBUSxDQUFDLE1BQU0sQ0FBQTtBQTRFcEMsa0JBQWUsWUFBWSxDQUFBIn0=