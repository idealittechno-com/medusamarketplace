"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderChild1701421590268 = void 0;
class OrderChild1701421590268 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order" ADD "order_parent_id" character varying`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_8a96dde86e3cad9d2fcc6cb171f87" FOREIGN KEY ("order_parent_id") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "order_parent_id"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_8a96dde86e3cad9d2fcc6cb171f87" FOREIGN KEY ("order_parent_id")`);
    }
}
exports.OrderChild1701421590268 = OrderChild1701421590268;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcwMTQyMTU5MDI2OC1PcmRlckNoaWxkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZ3JhdGlvbnMvMTcwMTQyMTU5MDI2OC1PcmRlckNoaWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsdUJBQXVCO0lBRXpCLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBd0I7UUFDcEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUM7UUFDdkYsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLG9LQUFvSyxDQUFDLENBQUM7SUFDbE0sQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBd0I7UUFDdEMsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7UUFDN0UsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLHdHQUF3RyxDQUFDLENBQUM7SUFDdEksQ0FBQztDQUVKO0FBWkQsMERBWUMifQ==