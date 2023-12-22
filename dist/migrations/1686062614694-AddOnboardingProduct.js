"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddOnboardingProduct1686062614694 = void 0;
class AddOnboardingProduct1686062614694 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "onboarding_state" ADD COLUMN "product_id" character varying NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "onboarding_state" DROP COLUMN "product_id"`);
    }
}
exports.AddOnboardingProduct1686062614694 = AddOnboardingProduct1686062614694;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY4NjA2MjYxNDY5NC1BZGRPbmJvYXJkaW5nUHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWdyYXRpb25zLzE2ODYwNjI2MTQ2OTQtQWRkT25ib2FyZGluZ1Byb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSxpQ0FBaUM7SUFDckMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUF3QjtRQUN0QyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQ3JCLCtFQUErRSxDQUNoRixDQUFDO0lBQ0osQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBd0I7UUFDeEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUNyQix5REFBeUQsQ0FDMUQsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQVpELDhFQVlDIn0=