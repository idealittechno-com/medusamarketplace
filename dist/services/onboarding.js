"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
const typeorm_1 = require("typeorm");
class OnboardingService extends medusa_1.TransactionBaseService {
    constructor({ onboardingRepository }) {
        super(arguments[0]);
        this.onboardingRepository_ = onboardingRepository;
    }
    async retrieve() {
        const onboardingRepo = this.activeManager_.withRepository(this.onboardingRepository_);
        const status = await onboardingRepo.findOne({
            where: { id: (0, typeorm_1.Not)((0, typeorm_1.IsNull)()) },
        });
        return status;
    }
    async update(data) {
        return await this.atomicPhase_(async (transactionManager) => {
            const onboardingRepository = transactionManager.withRepository(this.onboardingRepository_);
            const status = await this.retrieve();
            for (const [key, value] of Object.entries(data)) {
                status[key] = value;
            }
            return await onboardingRepository.save(status);
        });
    }
}
exports.default = OnboardingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9vbmJvYXJkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQTBEO0FBRzFELHFDQUFxRDtBQVFyRCxNQUFNLGlCQUFrQixTQUFRLCtCQUFzQjtJQUdwRCxZQUFZLEVBQUUsb0JBQW9CLEVBQXdCO1FBQ3hELEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMscUJBQXFCLEdBQUcsb0JBQW9CLENBQUM7SUFDcEQsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRO1FBQ1osTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQ3ZELElBQUksQ0FBQyxxQkFBcUIsQ0FDM0IsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBYyxDQUFDLE9BQU8sQ0FBQztZQUMxQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBQSxhQUFHLEVBQUMsSUFBQSxnQkFBTSxHQUFFLENBQUMsRUFBRTtTQUM3QixDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFnQztRQUMzQyxPQUFPLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FDNUIsS0FBSyxFQUFFLGtCQUFpQyxFQUFFLEVBQUU7WUFDMUMsTUFBTSxvQkFBb0IsR0FBRyxrQkFBa0IsQ0FBQyxjQUFjLENBQzVELElBQUksQ0FBQyxxQkFBcUIsQ0FDM0IsQ0FBQztZQUVGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBRXJDLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMvQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQ3JCO1lBRUQsT0FBTyxNQUFNLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUVELGtCQUFlLGlCQUFpQixDQUFDIn0=