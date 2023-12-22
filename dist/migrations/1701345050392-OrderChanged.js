"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderChanged1701345050392 = void 0;
class OrderChanged1701345050392 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order" ADD "store_id" character varying`);
        await queryRunner.query(`CREATE INDEX "OrderStoreId" ON "order" ("store_id") `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."OrderStoreId"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "store_id"`);
    }
}
exports.OrderChanged1701345050392 = OrderChanged1701345050392;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcwMTM0NTA1MDM5Mi1PcmRlckNoYW5nZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlncmF0aW9ucy8xNzAxMzQ1MDUwMzkyLU9yZGVyQ2hhbmdlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxNQUFhLHlCQUF5QjtJQUUzQixLQUFLLENBQUMsRUFBRSxDQUFDLFdBQXdCO1FBQ3BDLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1FBQ2hGLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQXdCO1FBQ3RDLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBQzlELE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7Q0FFSjtBQVpELDhEQVlDIn0=