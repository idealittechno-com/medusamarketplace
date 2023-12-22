"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
async function GET(req, res) {
    const onboardingService = req.scope.resolve("onboardingService");
    const status = await onboardingService.retrieve();
    res.status(200).json({ status });
}
exports.GET = GET;
async function POST(req, res) {
    const onboardingService = req.scope.resolve("onboardingService");
    const manager = req.scope.resolve("manager");
    const status = await manager.transaction(async (transactionManager) => {
        return await onboardingService
            .withTransaction(transactionManager)
            .update(req.body);
    });
    res.status(200).json({ status });
}
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL29uYm9hcmRpbmcvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBS08sS0FBSyxVQUFVLEdBQUcsQ0FBQyxHQUFrQixFQUFFLEdBQW1CO0lBQy9ELE1BQU0saUJBQWlCLEdBQ3JCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFFekMsTUFBTSxNQUFNLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUVsRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQVBELGtCQU9DO0FBRU0sS0FBSyxVQUFVLElBQUksQ0FBQyxHQUFrQixFQUFFLEdBQW1CO0lBQ2hFLE1BQU0saUJBQWlCLEdBQ3JCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDekMsTUFBTSxPQUFPLEdBQWtCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRTVELE1BQU0sTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsRUFBRTtRQUNwRSxPQUFPLE1BQU0saUJBQWlCO2FBQzNCLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQzthQUNuQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFaRCxvQkFZQyJ9