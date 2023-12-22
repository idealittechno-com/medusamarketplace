"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mikroOrmSerializer = exports.mikroOrmUpdateDeletedAtRecursively = void 0;
var mikro_orm_soft_deletable_filter_1 = require("./mikro-orm-soft-deletable-filter");
var mikroOrmUpdateDeletedAtRecursively = function (manager, entities, value) { return __awaiter(void 0, void 0, void 0, function () {
    var entities_1, entities_1_1, entity, relations, relationsToCascade, relationsToCascade_1, relationsToCascade_1_1, relation, collectionRelation, relationEntities, e_1_1, e_2_1;
    var e_2, _a, e_1, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 16, 17, 18]);
                entities_1 = __values(entities), entities_1_1 = entities_1.next();
                _d.label = 1;
            case 1:
                if (!!entities_1_1.done) return [3 /*break*/, 15];
                entity = entities_1_1.value;
                if (!("deleted_at" in entity))
                    return [3 /*break*/, 14];
                entity.deleted_at = value;
                relations = manager
                    .getDriver()
                    .getMetadata()
                    .get(entity.constructor.name).relations;
                relationsToCascade = relations.filter(function (relation) {
                    return relation.cascade.includes("soft-remove");
                });
                _d.label = 2;
            case 2:
                _d.trys.push([2, 10, 11, 12]);
                relationsToCascade_1 = (e_1 = void 0, __values(relationsToCascade)), relationsToCascade_1_1 = relationsToCascade_1.next();
                _d.label = 3;
            case 3:
                if (!!relationsToCascade_1_1.done) return [3 /*break*/, 9];
                relation = relationsToCascade_1_1.value;
                collectionRelation = entity[relation.name];
                if (!!collectionRelation.isInitialized()) return [3 /*break*/, 5];
                return [4 /*yield*/, collectionRelation.init()];
            case 4:
                _d.sent();
                _d.label = 5;
            case 5: return [4 /*yield*/, collectionRelation.getItems({
                    filters: (_c = {},
                        _c[mikro_orm_soft_deletable_filter_1.SoftDeletableFilterKey] = {
                            withDeleted: true,
                        },
                        _c),
                })];
            case 6:
                relationEntities = _d.sent();
                return [4 /*yield*/, (0, exports.mikroOrmUpdateDeletedAtRecursively)(manager, relationEntities, value)];
            case 7:
                _d.sent();
                _d.label = 8;
            case 8:
                relationsToCascade_1_1 = relationsToCascade_1.next();
                return [3 /*break*/, 3];
            case 9: return [3 /*break*/, 12];
            case 10:
                e_1_1 = _d.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 12];
            case 11:
                try {
                    if (relationsToCascade_1_1 && !relationsToCascade_1_1.done && (_b = relationsToCascade_1.return)) _b.call(relationsToCascade_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 12: return [4 /*yield*/, manager.persist(entity)];
            case 13:
                _d.sent();
                _d.label = 14;
            case 14:
                entities_1_1 = entities_1.next();
                return [3 /*break*/, 1];
            case 15: return [3 /*break*/, 18];
            case 16:
                e_2_1 = _d.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 18];
            case 17:
                try {
                    if (entities_1_1 && !entities_1_1.done && (_a = entities_1.return)) _a.call(entities_1);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 18: return [2 /*return*/];
        }
    });
}); };
exports.mikroOrmUpdateDeletedAtRecursively = mikroOrmUpdateDeletedAtRecursively;
var mikroOrmSerializer = function (data, options) { return __awaiter(void 0, void 0, void 0, function () {
    var serialize, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                options !== null && options !== void 0 ? options : (options = {});
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("@mikro-orm/core")); })];
            case 1:
                serialize = (_a.sent()).serialize;
                result = serialize(data, options);
                return [2 /*return*/, result];
        }
    });
}); };
exports.mikroOrmSerializer = mikroOrmSerializer;
//# sourceMappingURL=utils.js.map