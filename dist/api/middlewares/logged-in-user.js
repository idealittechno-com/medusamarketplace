"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerLoggedInUser = void 0;
async function registerLoggedInUser(req, res, next) {
    console.log("=============== middle ware =============");
    let loggedInUser = null;
    // Only for admin 
    // if (req.user && req.user.userId && **/^\\/admin/.test(req.originalUrl)**) {
    if (req.user && req.user.userId) {
        const userService = req.scope.resolve("userService");
        loggedInUser = await userService.retrieve(req.user.userId);
    }
    req.scope.register({
        loggedInUser: {
            resolve: () => loggedInUser,
        },
    });
    next();
}
exports.registerLoggedInUser = registerLoggedInUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VkLWluLXVzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL21pZGRsZXdhcmVzL2xvZ2dlZC1pbi11c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdPLEtBQUssVUFBVSxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFFdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0lBRXpELElBQUksWUFBWSxHQUFnQixJQUFJLENBQUE7SUFFdEMsa0JBQWtCO0lBQ2hCLDhFQUE4RTtJQUc5RSxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDL0IsTUFBTSxXQUFXLEdBQ2YsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFnQixDQUFBO1FBQ2pELFlBQVksR0FBRyxNQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtLQUMzRDtJQUVELEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ2pCLFlBQVksRUFBRTtZQUNaLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxZQUFZO1NBQzNCO0tBQ0YsQ0FBQyxDQUFBO0lBRUgsSUFBSSxFQUFFLENBQUE7QUFDUixDQUFDO0FBdkJELG9EQXVCQyJ9