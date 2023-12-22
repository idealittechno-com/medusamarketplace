"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const user_1 = require("../models/user");
const database_1 = require("@medusajs/medusa/dist/loaders/database");
const user_2 = require("@medusajs/medusa/dist/repositories/user");
exports.UserRepository = database_1.dataSource
    .getRepository(user_1.User)
    .extend({
    ...Object.assign(user_2.UserRepository, { target: user_1.User }),
});
exports.default = exports.UserRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvc2l0b3JpZXMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBcUM7QUFDckMscUVBRStDO0FBQy9DLGtFQUVnRDtBQUVuQyxRQUFBLGNBQWMsR0FBRyxxQkFBVTtLQUNyQyxhQUFhLENBQUMsV0FBSSxDQUFDO0tBQ25CLE1BQU0sQ0FBQztJQUNOLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDZCxxQkFBb0IsRUFDcEIsRUFBRSxNQUFNLEVBQUUsV0FBSSxFQUFFLENBQ2pCO0NBQ0YsQ0FBQyxDQUFBO0FBRUosa0JBQWUsc0JBQWMsQ0FBQSJ9