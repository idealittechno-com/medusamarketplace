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
var Order_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const typeorm_1 = require("typeorm");
const medusa_1 = require("@medusajs/medusa");
const store_1 = require("./store");
let Order = Order_1 = class Order extends medusa_1.Order {
};
__decorate([
    (0, typeorm_1.Index)("OrderStoreId"),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "store_id", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Order.prototype, "order_parent_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => store_1.Store, (store) => store.orders),
    (0, typeorm_1.JoinColumn)({ name: 'store_id', referencedColumnName: 'id' }),
    __metadata("design:type", store_1.Store)
], Order.prototype, "store", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Order_1, (order) => order.children),
    (0, typeorm_1.JoinColumn)({ name: 'order_parent_id' }),
    __metadata("design:type", Order)
], Order.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Order_1, (order) => order.parent),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'order_parent_id' }),
    __metadata("design:type", Array)
], Order.prototype, "children", void 0);
Order = Order_1 = __decorate([
    (0, typeorm_1.Entity)()
], Order);
exports.Order = Order;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL29yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBaUY7QUFDakYsNkNBRXlCO0FBQ3pCLG1DQUFnQztBQUd6QixJQUFNLEtBQUssYUFBWCxNQUFNLEtBQU0sU0FBUSxjQUFXO0NBcUJyQyxDQUFBO0FBcEJDO0lBQUMsSUFBQSxlQUFLLEVBQUMsY0FBYyxDQUFDO0lBQ3JCLElBQUEsZ0JBQU0sRUFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7dUNBQ1Q7QUFFbEI7SUFBQyxJQUFBLGVBQUssR0FBRTtJQUNSLElBQUEsZ0JBQU0sRUFBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzs7OENBQ0o7QUFFdkI7SUFBQyxJQUFBLG1CQUFTLEVBQUMsR0FBRyxFQUFFLENBQUMsYUFBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQy9DLElBQUEsb0JBQVUsRUFBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLENBQUM7OEJBQ3JELGFBQUs7b0NBQUM7QUFFZDtJQUFDLElBQUEsbUJBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxPQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDbEQsSUFBQSxvQkFBVSxFQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLENBQUM7OEJBQ2hDLEtBQUs7cUNBQUM7QUFFYjtJQUFDLElBQUEsbUJBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxPQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDaEQsSUFBQSxvQkFBVSxFQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxpQkFBaUIsRUFBRSxDQUFDOzt1Q0FDbEQ7QUFuQk4sS0FBSztJQURqQixJQUFBLGdCQUFNLEdBQUU7R0FDSSxLQUFLLENBcUJqQjtBQXJCWSxzQkFBSyJ9