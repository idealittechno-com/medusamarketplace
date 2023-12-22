"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
// export async function GET(
//   req: MedusaRequest,
//   res: MedusaResponse
// ): Promise<void> {
//   res.sendStatus(200);
// }
const GET = async (req, res) => {
    const orderService = req.scope.resolve("orderService");
    let loggedInUser = null;
    console.log("requested user : =========", req.user);
    console.log("userId user : =========", req.user.userId);
    if (req.user && req.user.userId) {
        const userService = req.scope.resolve("userService");
        loggedInUser = await userService.retrieve(req.user.userId);
    }
    req.scope.register({
        loggedInUser: {
            resolve: () => loggedInUser,
        },
    });
    res.json({
        orders: await orderService.topSell(loggedInUser),
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3RvcFNlbGwvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBT0EsNkJBQTZCO0FBQzdCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIscUJBQXFCO0FBQ3JCLHlCQUF5QjtBQUN6QixJQUFJO0FBRUcsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUFrQixFQUNsQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxZQUFZLEdBQWlCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUNsRCxjQUFjLENBQ2YsQ0FBQTtJQUVELElBQUksWUFBWSxHQUFnQixJQUFJLENBQUE7SUFFcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXZELElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUMvQixNQUFNLFdBQVcsR0FDZixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQWdCLENBQUE7UUFDakQsWUFBWSxHQUFHLE1BQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0tBQzNEO0lBQ0QsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDakIsWUFBWSxFQUFFO1lBQ1osT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQVk7U0FDM0I7S0FDRixDQUFDLENBQUE7SUFFSCxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7S0FDbEQsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBM0JZLFFBQUEsR0FBRyxPQTJCZiJ9