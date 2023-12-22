"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProductCategoryStoreId1703062955646 = void 0;
class AddProductCategoryStoreId1703062955646 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product_category" ADD "store_id" character varying`);
        await queryRunner.query(`CREATE INDEX "ProductCategoryId" ON "product" ("store_id") `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."ProductCategoryId"`);
        await queryRunner.query(`ALTER TABLE "product_category" DROP COLUMN "store_id"`);
    }
}
exports.AddProductCategoryStoreId1703062955646 = AddProductCategoryStoreId1703062955646;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcwMzA2Mjk1NTY0Ni1hZGQtcHJvZHVjdENhdGVnb3J5LXN0b3JlLWlkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZ3JhdGlvbnMvMTcwMzA2Mjk1NTY0Ni1hZGQtcHJvZHVjdENhdGVnb3J5LXN0b3JlLWlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsc0NBQXNDO0lBRXhDLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBd0I7UUFDcEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLGlFQUFpRSxDQUFDLENBQUM7UUFDM0YsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBd0I7UUFDdEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDbkUsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7SUFDckYsQ0FBQztDQUVKO0FBWkQsd0ZBWUMifQ==