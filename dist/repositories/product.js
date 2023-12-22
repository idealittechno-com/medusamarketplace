"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const product_1 = require("../models/product");
const database_1 = require("@medusajs/medusa/dist/loaders/database");
const product_2 = require("@medusajs/medusa/dist/repositories/product");
exports.ProductRepository = database_1.dataSource
    .getRepository(product_1.Product)
    .extend({
    ...Object.assign(product_2.ProductRepository, { target: product_1.Product }),
});
exports.default = exports.ProductRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvc2l0b3JpZXMvcHJvZHVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBMkM7QUFDM0MscUVBRStDO0FBQy9DLHdFQUVtRDtBQUV0QyxRQUFBLGlCQUFpQixHQUFHLHFCQUFVO0tBQ3hDLGFBQWEsQ0FBQyxpQkFBTyxDQUFDO0tBQ3RCLE1BQU0sQ0FBQztJQUNOLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDZCwyQkFBdUIsRUFDdkIsRUFBRSxNQUFNLEVBQUUsaUJBQU8sRUFBRSxDQUNwQjtDQUNGLENBQUMsQ0FBQTtBQUVKLGtCQUFlLHlCQUFpQixDQUFBIn0=