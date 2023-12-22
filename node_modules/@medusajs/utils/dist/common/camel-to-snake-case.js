"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelToSnakeCase = void 0;
var camelToSnakeCase = function (string) {
    return string.replace(/[A-Z]/g, function (letter) { return "_".concat(letter.toLowerCase()); });
};
exports.camelToSnakeCase = camelToSnakeCase;
//# sourceMappingURL=camel-to-snake-case.js.map