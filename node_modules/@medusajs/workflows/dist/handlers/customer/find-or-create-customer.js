"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOrCreateCustomer = void 0;
const utils_1 = require("@medusajs/utils");
var Aliases;
(function (Aliases) {
    Aliases["Customer"] = "customer";
})(Aliases || (Aliases = {}));
async function findOrCreateCustomer({ container, context, data, }) {
    const { manager } = context;
    const customerService = container.resolve("customerService");
    const customerDTO = {};
    const customerId = data[Aliases.Customer].customer_id;
    const customerServiceTx = customerService.withTransaction(manager);
    if (customerId) {
        const customer = await customerServiceTx
            .retrieve(customerId)
            .catch(() => undefined);
        customerDTO.customer_id = customer?.id;
        customerDTO.email = customer?.email;
    }
    const customerEmail = data[Aliases.Customer].email;
    if (customerEmail) {
        const validatedEmail = (0, utils_1.validateEmail)(customerEmail);
        let customer = await customerServiceTx
            .retrieveUnregisteredByEmail(validatedEmail)
            .catch(() => undefined);
        if (!customer) {
            customer = await customerServiceTx.create({ email: validatedEmail });
        }
        customerDTO.customer_id = customer.id;
        customerDTO.email = customer.email;
    }
    return customerDTO;
}
exports.findOrCreateCustomer = findOrCreateCustomer;
findOrCreateCustomer.aliases = Aliases;
//# sourceMappingURL=find-or-create-customer.js.map