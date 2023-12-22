"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./user");
const product_1 = require("./product");
const product_category_1 = require("./product-category");
const order_1 = require("./order");
const medusa_1 = require("@medusajs/medusa");
let Store = class Store extends medusa_1.Store {
};
__decorate([
    (0, typeorm_1.OneToMany)(() => user_1.User, (user) => user === null || user === void 0 ? void 0 : user.store),
    __metadata("design:type", Array)
], Store.prototype, "members", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_1.Product, (product) => product === null || product === void 0 ? void 0 : product.store),
    __metadata("design:type", Array)
], Store.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_category_1.ProductCategory, (productCategory) => productCategory === null || productCategory === void 0 ? void 0 : productCategory.store),
    __metadata("design:type", Array)
], Store.prototype, "productCategory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_1.Order, (order) => order.store),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'store_id' }),
    __metadata("design:type", Array)
], Store.prototype, "orders", void 0);
Store = __decorate([
    (0, typeorm_1.Entity)()
], Store);
exports.Store = Store;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL3N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQUF1RDtBQUN2RCxpQ0FBOEI7QUFDOUIsdUNBQW9DO0FBQ3BDLHlEQUFxRDtBQUNyRCxtQ0FBZ0M7QUFFaEMsNkNBRXlCO0FBR2xCLElBQU0sS0FBSyxHQUFYLE1BQU0sS0FBTSxTQUFRLGNBQVc7Q0FpQnJDLENBQUE7QUFoQkM7SUFBQyxJQUFBLG1CQUFTLEVBQUMsR0FBRyxFQUFFLENBQUMsV0FBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsS0FBSyxDQUFDOztzQ0FDNUI7QUFFakI7SUFBQyxJQUFBLG1CQUFTLEVBQUMsR0FBRyxFQUFFLENBQUMsaUJBQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLEtBQUssQ0FBQzs7dUNBQ2pDO0FBRXJCO0lBQUMsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLGtDQUFlLEVBQUUsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLGVBQWUsYUFBZixlQUFlLHVCQUFmLGVBQWUsQ0FBRSxLQUFLLENBQUM7OzhDQUMxQztBQUVwQztJQUFDLElBQUEsbUJBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxhQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDOUMsSUFBQSxvQkFBVSxFQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxVQUFVLEVBQUUsQ0FBQzs7cUNBQzdDO0FBWkwsS0FBSztJQURqQixJQUFBLGdCQUFNLEdBQUU7R0FDSSxLQUFLLENBaUJqQjtBQWpCWSxzQkFBSyJ9