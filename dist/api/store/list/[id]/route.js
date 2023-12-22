"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
// list posts
const GET = async (req, res) => {
    const storeService = req.scope.resolve("storeService");
    res.json({
        list: await storeService.retrieve(req.body),
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2xpc3QvW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFRQSxhQUFhO0FBQ04sTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUFrQixFQUNsQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxZQUFZLEdBQWlCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUNsRCxjQUFjLENBQ2YsQ0FBQTtJQUVELEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxJQUFJLEVBQUUsTUFBTSxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7S0FDNUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBWFksUUFBQSxHQUFHLE9BV2YifQ==