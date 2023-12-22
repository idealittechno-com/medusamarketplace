"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorrectOnboardingFields1690996567455 = void 0;
class CorrectOnboardingFields1690996567455 {
    constructor() {
        this.name = 'CorrectOnboardingFields1690996567455';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "onboarding_state" ADD CONSTRAINT "PK_891b72628471aada55d7b8c9410" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "onboarding_state" ALTER COLUMN "is_complete" SET NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "onboarding_state" ALTER COLUMN "is_complete" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "onboarding_state" DROP CONSTRAINT "PK_891b72628471aada55d7b8c9410"`);
    }
}
exports.CorrectOnboardingFields1690996567455 = CorrectOnboardingFields1690996567455;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY5MDk5NjU2NzQ1NS1Db3JyZWN0T25ib2FyZGluZ0ZpZWxkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWdyYXRpb25zLzE2OTA5OTY1Njc0NTUtQ29ycmVjdE9uYm9hcmRpbmdGaWVsZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSxvQ0FBb0M7SUFBakQ7UUFDSSxTQUFJLEdBQUcsc0NBQXNDLENBQUE7SUFZakQsQ0FBQztJQVZVLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBd0I7UUFDcEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLG1HQUFtRyxDQUFDLENBQUM7UUFDN0gsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLHdFQUF3RSxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBd0I7UUFDdEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLHlFQUF5RSxDQUFDLENBQUM7UUFDbkcsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLGlGQUFpRixDQUFDLENBQUM7SUFDL0csQ0FBQztDQUVKO0FBYkQsb0ZBYUMifQ==