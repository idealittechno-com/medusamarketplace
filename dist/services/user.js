"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const medusa_1 = require("@medusajs/medusa");
class UserService extends medusa_1.UserService {
    constructor(container, options) {
        // @ts-expect-error prefer-rest-params
        super(...arguments);
        this.storeRepository_ = container.storeRepository;
        try {
            this.loggedInUser_ = container.loggedInUser;
        }
        catch (e) {
            // avoid errors when backend first runs
        }
    }
    async create(user, password) {
        if (!user.store_id) {
            const storeRepo = this.manager_.withRepository(this.storeRepository_);
            let newStore = storeRepo.create();
            newStore = await storeRepo.save(newStore);
            user.store_id = newStore.id;
        }
        return await super.create(user, password);
    }
}
UserService.LIFE_TIME = awilix_1.Lifetime.SCOPED;
exports.default = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQWlDO0FBQ2pDLDZDQUFtRTtBQVNuRSxNQUFNLFdBQVksU0FBUSxvQkFBaUI7SUFLekMsWUFBWSxTQUFTLEVBQUUsT0FBTztRQUM1QixzQ0FBc0M7UUFDdEMsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUE7UUFDbkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUE7UUFFakQsSUFBSTtZQUNGLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQTtTQUM1QztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsdUNBQXVDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBcUIsRUFBRSxRQUFnQjtRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtZQUNyRSxJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUE7WUFDakMsUUFBUSxHQUFHLE1BQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUE7U0FDNUI7UUFDRCxPQUFPLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUE7SUFDM0MsQ0FBQzs7QUF4Qk0scUJBQVMsR0FBRyxpQkFBUSxDQUFDLE1BQU0sQ0FBQTtBQTJCcEMsa0JBQWUsV0FBVyxDQUFBIn0=