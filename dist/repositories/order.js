"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const order_1 = require("../models/order");
const database_1 = require("@medusajs/medusa/dist/loaders/database");
const order_2 = require("@medusajs/medusa/dist/repositories/order");
exports.OrderRepository = database_1.dataSource
    .getRepository(order_1.Order)
    .extend({
    ...Object.assign(order_2.OrderRepository, { target: order_1.Order }),
});
exports.default = exports.OrderRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVwb3NpdG9yaWVzL29yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF1QztBQUN2QyxxRUFFK0M7QUFDL0Msb0VBRWlEO0FBRXBDLFFBQUEsZUFBZSxHQUFHLHFCQUFVO0tBQ3RDLGFBQWEsQ0FBQyxhQUFLLENBQUM7S0FDcEIsTUFBTSxDQUFDO0lBQ04sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUNkLHVCQUFxQixFQUNyQixFQUFFLE1BQU0sRUFBRSxhQUFLLEVBQUUsQ0FDbEI7Q0FDRixDQUFDLENBQUE7QUFFSixrQkFBZSx1QkFBZSxDQUFBIn0=