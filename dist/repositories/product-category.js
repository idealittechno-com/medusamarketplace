"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryRepository = void 0;
const product_category_1 = require("../models/product-category");
const database_1 = require("@medusajs/medusa/dist/loaders/database");
const product_category_2 = require("@medusajs/medusa/dist/repositories/product-category");
exports.ProductCategoryRepository = database_1.dataSource
    .getTreeRepository(product_category_1.ProductCategory)
    .extend({
    ...Object.assign(product_category_2.ProductCategoryRepository, { target: product_category_1.ProductCategory }),
});
exports.default = exports.ProductCategoryRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXRlZ29yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvc2l0b3JpZXMvcHJvZHVjdC1jYXRlZ29yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpRUFBNEQ7QUFDNUQscUVBRStDO0FBQy9DLDBGQUU0RDtBQUUvQyxRQUFBLHlCQUF5QixHQUFHLHFCQUFVO0tBQ2hELGlCQUFpQixDQUFDLGtDQUFlLENBQUM7S0FDbEMsTUFBTSxDQUFDO0lBQ04sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUNkLDRDQUErQixFQUMvQixFQUFFLE1BQU0sRUFBRSxrQ0FBZSxFQUFFLENBQzVCO0NBQ0YsQ0FBQyxDQUFBO0FBRUosa0JBQWUsaUNBQXlCLENBQUEifQ==