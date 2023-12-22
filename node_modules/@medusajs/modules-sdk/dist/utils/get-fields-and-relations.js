"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFieldsAndRelations = void 0;
const graphql_1 = require("graphql");
function getFieldsAndRelations(schemaTypeMap, typeName, relations = []) {
    const result = [];
    function traverseFields(typeName, prefix) {
        const type = schemaTypeMap[typeName];
        if (!(type instanceof graphql_1.GraphQLObjectType)) {
            return;
        }
        const fields = type.getFields();
        for (const fieldName in fields) {
            const field = fields[fieldName];
            let fieldType = field.type;
            while (fieldType.ofType) {
                fieldType = fieldType.ofType;
            }
            if (!(0, graphql_1.isObjectType)(fieldType)) {
                result.push(`${prefix}${fieldName}`);
            }
            else if (relations.includes(prefix + fieldName)) {
                traverseFields(fieldType.name, `${prefix}${fieldName}.`);
            }
        }
    }
    traverseFields(typeName, "");
    return result;
}
exports.getFieldsAndRelations = getFieldsAndRelations;
//# sourceMappingURL=get-fields-and-relations.js.map