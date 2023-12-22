import { MigrationInterface, QueryRunner } from "typeorm"

export class OrderChild1701421590268 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" ADD "order_parent_id" character varying`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_8a96dde86e3cad9d2fcc6cb171f87" FOREIGN KEY ("order_parent_id") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "order_parent_id"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_8a96dde86e3cad9d2fcc6cb171f87" FOREIGN KEY ("order_parent_id")`);
    }

}
