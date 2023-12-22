"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const GET = async (req, res) => {
    const productService = req.scope.resolve("productService");
    res.json({
        products: await productService.retrieveAll(),
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3Byb2R1Y3RMaXN0L3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVFPLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sY0FBYyxHQUFtQixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FDdEQsZ0JBQWdCLENBQ2pCLENBQUE7SUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDLFdBQVcsRUFBRTtLQUM5QyxDQUFDLENBQUE7QUFDSCxDQUFDLENBQUE7QUFWWSxRQUFBLEdBQUcsT0FVZiJ9