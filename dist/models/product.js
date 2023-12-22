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
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const medusa_1 = require("@medusajs/medusa");
const store_1 = require("./store");
let Product = class Product extends medusa_1.Product {
};
__decorate([
    (0, typeorm_1.Index)("ProductStoreId"),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "store_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => store_1.Store, (store) => store.products),
    (0, typeorm_1.JoinColumn)({ name: 'store_id', referencedColumnName: 'id' }),
    __metadata("design:type", store_1.Store)
], Product.prototype, "store", void 0);
Product = __decorate([
    (0, typeorm_1.Entity)()
], Product);
exports.Product = Product;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvcHJvZHVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBc0U7QUFDdEUsNkNBRXlCO0FBQ3pCLG1DQUFnQztBQUd6QixJQUFNLE9BQU8sR0FBYixNQUFNLE9BQVEsU0FBUSxnQkFBYTtDQVV6QyxDQUFBO0FBVEM7SUFBQyxJQUFBLGVBQUssRUFBQyxnQkFBZ0IsQ0FBQztJQUN2QixJQUFBLGdCQUFNLEVBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3lDQUNUO0FBRWxCO0lBQUMsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLGFBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUNqRCxJQUFBLG9CQUFVLEVBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRSxDQUFDOzhCQUNyRCxhQUFLO3NDQUFDO0FBUEgsT0FBTztJQURuQixJQUFBLGdCQUFNLEdBQUU7R0FDSSxPQUFPLENBVW5CO0FBVlksMEJBQU8ifQ==