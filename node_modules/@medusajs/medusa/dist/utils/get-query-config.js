"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareRetrieveQuery = exports.prepareListQuery = exports.getListConfig = exports.getRetrieveConfig = exports.pickByConfig = void 0;
var lodash_1 = require("lodash");
var medusa_core_utils_1 = require("medusa-core-utils");
function pickByConfig(obj, config) {
    var _a, _b;
    var fields = __spreadArray(__spreadArray([], __read(((_a = config.select) !== null && _a !== void 0 ? _a : [])), false), __read(((_b = config.relations) !== null && _b !== void 0 ? _b : [])), false);
    if (fields.length) {
        if (Array.isArray(obj)) {
            return obj.map(function (o) { return (0, lodash_1.pick)(o, fields); });
        }
        else {
            return (0, lodash_1.pick)(obj, fields);
        }
    }
    return obj;
}
exports.pickByConfig = pickByConfig;
function getRetrieveConfig(defaultFields, defaultRelations, fields, expand) {
    var includeFields = [];
    if ((0, medusa_core_utils_1.isDefined)(fields)) {
        includeFields = Array.from(new Set(__spreadArray(__spreadArray([], __read(fields), false), ["id"], false))).map(function (field) {
            return typeof field === "string" ? field.trim() : field;
        });
    }
    var expandFields = [];
    if ((0, medusa_core_utils_1.isDefined)(expand)) {
        expandFields = expand.map(function (expandRelation) { return expandRelation.trim(); });
    }
    return {
        select: includeFields.length ? includeFields : defaultFields,
        relations: (0, medusa_core_utils_1.isDefined)(expand) ? expandFields : defaultRelations,
    };
}
exports.getRetrieveConfig = getRetrieveConfig;
function getListConfig(defaultFields, defaultRelations, fields, expand, limit, offset, order) {
    if (limit === void 0) { limit = 50; }
    if (offset === void 0) { offset = 0; }
    if (order === void 0) { order = {}; }
    var includeFields = [];
    if ((0, medusa_core_utils_1.isDefined)(fields)) {
        var fieldSet = new Set(fields);
        // Ensure created_at is included, since we are sorting on this
        fieldSet.add("created_at");
        fieldSet.add("id");
        includeFields = Array.from(fieldSet);
    }
    var expandFields = [];
    if ((0, medusa_core_utils_1.isDefined)(expand)) {
        expandFields = expand;
    }
    var orderBy = order;
    if (!Object.keys(order).length) {
        orderBy["created_at"] = "DESC";
    }
    return {
        select: includeFields.length ? includeFields : defaultFields,
        relations: (0, medusa_core_utils_1.isDefined)(expand) ? expandFields : defaultRelations,
        skip: offset,
        take: limit,
        order: orderBy,
    };
}
exports.getListConfig = getListConfig;
function prepareListQuery(validated, queryConfig) {
    var _a, _b;
    var _c, _d, _e, _f;
    var order = validated.order, fields = validated.fields, expand = validated.expand, limit = validated.limit, offset = validated.offset;
    var expandRelations = undefined;
    if ((0, medusa_core_utils_1.isDefined)(expand)) {
        expandRelations = expand.split(",").filter(function (v) { return v; });
    }
    var expandFields = undefined;
    if ((0, medusa_core_utils_1.isDefined)(fields)) {
        expandFields = fields.split(",").filter(function (v) { return v; });
    }
    if ((expandFields === null || expandFields === void 0 ? void 0 : expandFields.length) && ((_c = queryConfig === null || queryConfig === void 0 ? void 0 : queryConfig.allowedFields) === null || _c === void 0 ? void 0 : _c.length)) {
        validateFields(expandFields, queryConfig.allowedFields);
    }
    if ((expandRelations === null || expandRelations === void 0 ? void 0 : expandRelations.length) && ((_d = queryConfig === null || queryConfig === void 0 ? void 0 : queryConfig.allowedRelations) === null || _d === void 0 ? void 0 : _d.length)) {
        validateRelations(expandRelations, queryConfig.allowedRelations);
    }
    var orderBy;
    if ((0, medusa_core_utils_1.isDefined)(order)) {
        var orderField = order;
        if (order.startsWith("-")) {
            var _g = __read(order.split("-"), 2), field = _g[1];
            orderField = field;
            orderBy = (_a = {}, _a[field] = "DESC", _a);
        }
        else {
            orderBy = (_b = {}, _b[order] = "ASC", _b);
        }
        if (((_e = queryConfig === null || queryConfig === void 0 ? void 0 : queryConfig.allowedFields) === null || _e === void 0 ? void 0 : _e.length) &&
            !(queryConfig === null || queryConfig === void 0 ? void 0 : queryConfig.allowedFields.includes(orderField))) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Order field ".concat(orderField, " is not valid"));
        }
    }
    return getListConfig(queryConfig === null || queryConfig === void 0 ? void 0 : queryConfig.defaultFields, ((_f = queryConfig === null || queryConfig === void 0 ? void 0 : queryConfig.defaultRelations) !== null && _f !== void 0 ? _f : []), expandFields, expandRelations, limit !== null && limit !== void 0 ? limit : queryConfig === null || queryConfig === void 0 ? void 0 : queryConfig.defaultLimit, offset !== null && offset !== void 0 ? offset : 0, orderBy);
}
exports.prepareListQuery = prepareListQuery;
function prepareRetrieveQuery(validated, queryConfig) {
    var _a, _b, _c;
    var fields = validated.fields, expand = validated.expand;
    var expandRelations = undefined;
    if ((0, medusa_core_utils_1.isDefined)(expand)) {
        expandRelations = expand.split(",").filter(function (v) { return v; });
    }
    var expandFields = undefined;
    if ((0, medusa_core_utils_1.isDefined)(fields)) {
        expandFields = fields.split(",").filter(function (v) { return v; });
    }
    if ((expandFields === null || expandFields === void 0 ? void 0 : expandFields.length) && ((_a = queryConfig === null || queryConfig === void 0 ? void 0 : queryConfig.allowedFields) === null || _a === void 0 ? void 0 : _a.length)) {
        validateFields(expandFields, queryConfig.allowedFields);
    }
    if ((expandRelations === null || expandRelations === void 0 ? void 0 : expandRelations.length) && ((_b = queryConfig === null || queryConfig === void 0 ? void 0 : queryConfig.allowedRelations) === null || _b === void 0 ? void 0 : _b.length)) {
        validateRelations(expandRelations, queryConfig.allowedRelations);
    }
    return getRetrieveConfig(queryConfig === null || queryConfig === void 0 ? void 0 : queryConfig.defaultFields, ((_c = queryConfig === null || queryConfig === void 0 ? void 0 : queryConfig.defaultRelations) !== null && _c !== void 0 ? _c : []), expandFields, expandRelations);
}
exports.prepareRetrieveQuery = prepareRetrieveQuery;
function validateRelations(relations, allowed) {
    var disallowedRelationsFound = [];
    relations === null || relations === void 0 ? void 0 : relations.forEach(function (field) {
        if (!allowed.includes(field)) {
            disallowedRelationsFound.push(field);
        }
    });
    if (disallowedRelationsFound.length) {
        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Relations [".concat(disallowedRelationsFound.join(", "), "] are not valid"));
    }
}
function validateFields(fields, allowed) {
    var disallowedFieldsFound = [];
    fields === null || fields === void 0 ? void 0 : fields.forEach(function (field) {
        if (!allowed.includes(field)) {
            disallowedFieldsFound.push(field);
        }
    });
    if (disallowedFieldsFound.length) {
        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Fields [".concat(disallowedFieldsFound.join(", "), "] are not valid"));
    }
}
//# sourceMappingURL=get-query-config.js.map