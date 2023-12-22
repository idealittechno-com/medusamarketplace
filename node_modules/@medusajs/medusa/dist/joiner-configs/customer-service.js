"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    serviceName: "customerService",
    primaryKeys: ["id"],
    linkableKeys: { customer_id: "Customer" },
    alias: [
        {
            name: "customer",
        },
        {
            name: "customers",
        },
    ],
};
//# sourceMappingURL=customer-service.js.map