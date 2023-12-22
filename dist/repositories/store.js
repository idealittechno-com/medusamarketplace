"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreRepository = void 0;
const store_1 = require("../models/store");
const database_1 = require("@medusajs/medusa/dist/loaders/database");
const store_2 = require("@medusajs/medusa/dist/repositories/store");
exports.StoreRepository = database_1.dataSource
    .getRepository(store_1.Store)
    .extend({
    ...Object.assign(store_2.StoreRepository, { target: store_1.Store }),
});
exports.default = exports.StoreRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVwb3NpdG9yaWVzL3N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF1QztBQUN2QyxxRUFFK0M7QUFDL0Msb0VBRWlEO0FBRXBDLFFBQUEsZUFBZSxHQUFHLHFCQUFVO0tBQ3RDLGFBQWEsQ0FBQyxhQUFLLENBQUM7S0FDcEIsTUFBTSxDQUFDO0lBQ04sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUNkLHVCQUFxQixFQUNyQixFQUFFLE1BQU0sRUFBRSxhQUFLLEVBQUUsQ0FDbEI7Q0FDRixDQUFDLENBQUE7QUFFSixrQkFBZSx1QkFBZSxDQUFBIn0=