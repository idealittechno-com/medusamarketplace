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
exports.ProductCategory = void 0;
const typeorm_1 = require("typeorm");
const medusa_1 = require("@medusajs/medusa");
const store_1 = require("./store");
let ProductCategory = class ProductCategory extends medusa_1.ProductCategory {
};
__decorate([
    (0, typeorm_1.Index)("ProductStoreId"),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ProductCategory.prototype, "store_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => store_1.Store, (store) => store.products),
    (0, typeorm_1.JoinColumn)({ name: 'store_id', referencedColumnName: 'id' }),
    __metadata("design:type", store_1.Store)
], ProductCategory.prototype, "store", void 0);
__decorate([
    (0, medusa_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
    __metadata("design:type", Object)
], ProductCategory.prototype, "metadata", void 0);
ProductCategory = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Tree)("materialized-path")
], ProductCategory);
exports.ProductCategory = ProductCategory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXRlZ29yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvcHJvZHVjdC1jYXRlZ29yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBMkU7QUFDM0UsNkNBRXlCO0FBQ3pCLG1DQUFnQztBQUl6QixJQUFNLGVBQWUsR0FBckIsTUFBTSxlQUFnQixTQUFRLHdCQUFxQjtDQVl6RCxDQUFBO0FBWEM7SUFBQyxJQUFBLGVBQUssRUFBQyxnQkFBZ0IsQ0FBQztJQUN2QixJQUFBLGdCQUFNLEVBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O2lEQUNUO0FBRWxCO0lBQUMsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLGFBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUNqRCxJQUFBLG9CQUFVLEVBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRSxDQUFDOzhCQUNyRCxhQUFLOzhDQUFDO0FBRWQ7SUFBQyxJQUFBLHNCQUFhLEVBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7aURBQ2hCO0FBVnRCLGVBQWU7SUFGM0IsSUFBQSxnQkFBTSxHQUFFO0lBQ1IsSUFBQSxjQUFJLEVBQUMsbUJBQW1CLENBQUM7R0FDYixlQUFlLENBWTNCO0FBWlksMENBQWUifQ==