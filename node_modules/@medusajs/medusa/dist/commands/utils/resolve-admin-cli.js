"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveAdminCLI = void 0;
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = __importDefault(require("path"));
function resolveAdminCLI(directory) {
    var cli = path_1.default.join(directory, "node_modules", "@medusajs", "admin", "bin", "medusa-admin.js");
    var binExists = fs_extra_1.default.existsSync(cli);
    return {
        binExists: binExists,
        cli: cli,
    };
}
exports.resolveAdminCLI = resolveAdminCLI;
//# sourceMappingURL=resolve-admin-cli.js.map