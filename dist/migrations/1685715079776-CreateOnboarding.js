"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOnboarding1685715079776 = void 0;
const utils_1 = require("@medusajs/utils");
class CreateOnboarding1685715079776 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "onboarding_state" ("id" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "current_step" character varying NULL, "is_complete" boolean)`);
        await queryRunner.query(`INSERT INTO "onboarding_state" ("id", "current_step", "is_complete") VALUES ('${(0, utils_1.generateEntityId)("", "onboarding")}' , NULL, false)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "onboarding_state"`);
    }
}
exports.CreateOnboarding1685715079776 = CreateOnboarding1685715079776;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY4NTcxNTA3OTc3Ni1DcmVhdGVPbmJvYXJkaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZ3JhdGlvbnMvMTY4NTcxNTA3OTc3Ni1DcmVhdGVPbmJvYXJkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFtRDtBQUduRCxNQUFhLDZCQUE2QjtJQUNqQyxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQXdCO1FBQ3RDLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FDckIsNlBBQTZQLENBQzlQLENBQUM7UUFFRixNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQ3JCLGlGQUFpRixJQUFBLHdCQUFnQixFQUMvRixFQUFFLEVBQ0YsWUFBWSxDQUNiLGtCQUFrQixDQUNwQixDQUFDO0lBQ0osQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBd0I7UUFDeEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDM0QsQ0FBQztDQUNGO0FBakJELHNFQWlCQyJ9