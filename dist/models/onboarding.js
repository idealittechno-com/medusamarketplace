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
exports.OnboardingState = void 0;
const medusa_1 = require("@medusajs/medusa");
const typeorm_1 = require("typeorm");
let OnboardingState = class OnboardingState extends medusa_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OnboardingState.prototype, "current_step", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], OnboardingState.prototype, "is_complete", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], OnboardingState.prototype, "product_id", void 0);
OnboardingState = __decorate([
    (0, typeorm_1.Entity)()
], OnboardingState);
exports.OnboardingState = OnboardingState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvb25ib2FyZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBOEM7QUFDOUMscUNBQXlDO0FBR2xDLElBQU0sZUFBZSxHQUFyQixNQUFNLGVBQWdCLFNBQVEsbUJBQVU7Q0FTOUMsQ0FBQTtBQVJDO0lBQUMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztxREFDTjtBQUVyQjtJQUFDLElBQUEsZ0JBQU0sR0FBRTs7b0RBQ1k7QUFFckI7SUFBQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O21EQUNSO0FBUlIsZUFBZTtJQUQzQixJQUFBLGdCQUFNLEdBQUU7R0FDSSxlQUFlLENBUzNCO0FBVFksMENBQWUifQ==