"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductChanged1701258839131 = void 0;
class ProductChanged1701258839131 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" ADD "store_id" character varying`);
        await queryRunner.query(`CREATE INDEX "ProductStoreId" ON "product" ("store_id") `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."ProductStoreId"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "store_id"`);
    }
}
exports.ProductChanged1701258839131 = ProductChanged1701258839131;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcwMTI1ODgzOTEzMS1Qcm9kdWN0Q2hhbmdlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWdyYXRpb25zLzE3MDEyNTg4MzkxMzEtUHJvZHVjdENoYW5nZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSwyQkFBMkI7SUFFN0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUF3QjtRQUNwQyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztRQUNsRixNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQztJQUN4RixDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxXQUF3QjtRQUN0QyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUNoRSxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztJQUM1RSxDQUFDO0NBRUo7QUFaRCxrRUFZQyJ9