"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const GET = async (req, res) => {
    const onlystore = req.body.onlystore ? req.body.onlystore : 0;
    const searchStore = req.body.q ? req.body.q : '';
    console.log("Requested onlystore ================", onlystore);
    console.log("Requested searchStore ================", searchStore);
    const storeService = req.scope.resolve("storeService");
    res.json({
        store: await storeService.retrieveAll(onlystore, searchStore),
    });
    // const storeRepository = 
    //  req.scope.resolve("storeRepository")
    // const manager = req.scope.resolve<EntityManager>("manager")
    // const storeRepo = manager.withRepository(storeRepository)
    // res.json({
    // list: await storeRepo.find(),
    // })
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2xpc3Qvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBUU8sTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUFrQixFQUNsQixHQUFtQixFQUNuQixFQUFFO0lBRUYsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0QsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRW5FLE1BQU0sWUFBWSxHQUFpQixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FDbEQsY0FBYyxDQUNmLENBQUE7SUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsS0FBSyxFQUFFLE1BQU0sWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDO0tBQy9ELENBQUMsQ0FBQTtJQUNDLDJCQUEyQjtJQUMzQix3Q0FBd0M7SUFDeEMsOERBQThEO0lBQzlELDREQUE0RDtJQUM1RCxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLEtBQUs7QUFFVCxDQUFDLENBQUE7QUF6QlksUUFBQSxHQUFHLE9BeUJmIn0=