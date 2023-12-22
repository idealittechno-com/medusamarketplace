"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.reporter = void 0;
var picocolors_1 = __importDefault(require("picocolors"));
var PREFIX = picocolors_1["default"].cyan("[@medusajs/admin]");
exports.reporter = {
    panic: function (err) {
        console.error("".concat(PREFIX, " ").concat(picocolors_1["default"].red(err.message)));
        process.exit(1);
    },
    error: function (message) {
        console.error("".concat(PREFIX, " ").concat(picocolors_1["default"].red(message)));
    },
    info: function (message) {
        console.log("".concat(PREFIX, " ").concat(picocolors_1["default"].blue(message)));
    },
    warn: function (message) {
        console.warn("".concat(PREFIX, " ").concat(picocolors_1["default"].yellow(message)));
    }
};
