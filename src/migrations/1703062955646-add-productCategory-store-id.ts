import { MigrationInterface, QueryRunner } from "typeorm"

export class AddProductCategoryStoreId1703062955646 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_category" ADD "store_id" character varying`);
        await queryRunner.query(`CREATE INDEX "ProductCategoryId" ON "product" ("store_id") `);
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."ProductCategoryId"`);
        await queryRunner.query(`ALTER TABLE "product_category" DROP COLUMN "store_id"`);
    }

}




