"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const registerLoggedInUser = async (req, res, next) => {
    let loggedInUser = null;
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
};
exports.config = {
    routes: [
        {
            matcher: "/admin/products",
            middlewares: [registerLoggedInUser],
        },
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVdFLE1BQU0sb0JBQW9CLEdBQUcsS0FBSyxFQUNoQyxHQUFrQixFQUNsQixHQUFtQixFQUNuQixJQUF3QixFQUN4QixFQUFFO0lBQ0YsSUFBSSxZQUFZLEdBQWdCLElBQUksQ0FBQTtJQUVwQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDL0IsTUFBTSxXQUFXLEdBQ2YsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFnQixDQUFBO1FBQ2pELFlBQVksR0FBRyxNQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtLQUMzRDtJQUVELEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ2pCLFlBQVksRUFBRTtZQUNaLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxZQUFZO1NBQzNCO0tBQ0YsQ0FBQyxDQUFBO0lBRUgsSUFBSSxFQUFFLENBQUE7QUFDUixDQUFDLENBQUE7QUFFWSxRQUFBLE1BQU0sR0FBc0I7SUFDdkMsTUFBTSxFQUFFO1FBQ047WUFDRSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ3BDO0tBQ0Y7Q0FDRixDQUFBIn0=