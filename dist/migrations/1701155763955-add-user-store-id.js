"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserStoreId1701155763955 = void 0;
class AddUserStoreId1701155763955 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "store_id" character varying`);
        await queryRunner.query(`CREATE INDEX "UserStoreId" ON "user" ("store_id") `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."UserStoreId"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "store_id"`);
    }
}
exports.AddUserStoreId1701155763955 = AddUserStoreId1701155763955;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcwMTE1NTc2Mzk1NS1hZGQtdXNlci1zdG9yZS1pZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWdyYXRpb25zLzE3MDExNTU3NjM5NTUtYWRkLXVzZXItc3RvcmUtaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSwyQkFBMkI7SUFFN0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUF3QjtRQUNwQyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztRQUMvRSxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxXQUF3QjtRQUN0QyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUM3RCxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0NBRUo7QUFaRCxrRUFZQyJ9