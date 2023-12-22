"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const medusa_1 = require("@medusajs/medusa");
// type ProductSelector = {
//   store_id?: string
// } & MedusaProductSelector
// type CreateProductInput = {
//   store_id?: string
// } & MedusaCreateProductInput
class ProductCategoryService extends medusa_1.ProductCategoryService {
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
}
ProductCategoryService.LIFE_TIME = awilix_1.Lifetime.SCOPED;
exports.default = ProductCategoryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXRlZ29yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9wcm9kdWN0LWNhdGVnb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQWlDO0FBQ2pDLDZDQUV5QjtBQU96QiwyQkFBMkI7QUFDM0Isc0JBQXNCO0FBQ3RCLDRCQUE0QjtBQUU1Qiw4QkFBOEI7QUFDOUIsc0JBQXNCO0FBQ3RCLCtCQUErQjtBQUUvQixNQUFNLHNCQUF1QixTQUFRLCtCQUFvQjtJQUl2RCxZQUFZLFNBQVMsRUFBRSxPQUFPO1FBQzVCLHNDQUFzQztRQUN0QyxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQTtRQUVuQixJQUFJO1lBQ0YsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFBO1NBQzVDO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVix1Q0FBdUM7U0FDeEM7SUFDSCxDQUFDOztBQVpNLGdDQUFTLEdBQUcsaUJBQVEsQ0FBQyxNQUFNLENBQUE7QUF3RnBDLGtCQUFlLHNCQUFzQixDQUFBIn0=