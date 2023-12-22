"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fse = __importStar(require("fs-extra"));
var path_1 = __importDefault(require("path"));
var ts_dedent_1 = __importDefault(require("ts-dedent"));
var DEFAULT_DESTINATION = "medusa-admin-ui";
function eject(_a) {
    var _b = _a.outDir, outDir = _b === void 0 ? DEFAULT_DESTINATION : _b;
    return __awaiter(this, void 0, void 0, function () {
        var projectPath, uiPath, packageJsonPath, pkg, fieldsToRemove, dependenciesToMove, dependencies, viteConfig, tailwindConfig, newTailwindConfig, postcssConfig, tmpPath;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    projectPath = require.resolve("@medusajs/admin-ui");
                    uiPath = path_1["default"].join(projectPath, "..", "..", "ui");
                    packageJsonPath = path_1["default"].join(projectPath, "..", "..", "package.json");
                    return [4 /*yield*/, fse.readJSON(packageJsonPath)];
                case 1:
                    pkg = _c.sent();
                    fieldsToRemove = ["exports", "types", "files", "main", "packageManager"];
                    fieldsToRemove.forEach(function (field) { return delete pkg[field]; });
                    pkg.type = "module";
                    dependenciesToMove = [
                        "tailwindcss",
                        "autoprefixer",
                        "postcss",
                        "tailwindcss-radix",
                        "@tailwindcss/forms",
                        "vite",
                        "@vitejs/plugin-react",
                    ];
                    dependencies = Object.keys(pkg.dependencies).filter(function (dep) {
                        return dependenciesToMove.includes(dep);
                    });
                    dependencies.forEach(function (dep) {
                        pkg.devDependencies[dep] = pkg.dependencies[dep];
                        delete pkg.dependencies[dep];
                    });
                    pkg.scripts = {
                        build: "vite build",
                        dev: "vite --port 7001",
                        preview: "vite preview"
                    };
                    viteConfig = (0, ts_dedent_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  import { defineConfig } from \"vite\"\n  import dns from \"dns\"\n  import react from \"@vitejs/plugin-react\"\n\n    // Resolve localhost for Node v16 and older.\n    // @see https://vitejs.dev/config/server-options.html#server-host.\n    dns.setDefaultResultOrder(\"verbatim\")\n\n    // https://vitejs.dev/config/\n    export default defineConfig({\n        plugins: [react()],\n        define: {\n            __BASE__: JSON.stringify(\"/\"),\n            __MEDUSA_BACKEND_URL__: JSON.stringify(\"http://localhost:9000\"),\n        },\n    })\n  "], ["\n  import { defineConfig } from \"vite\"\n  import dns from \"dns\"\n  import react from \"@vitejs/plugin-react\"\n\n    // Resolve localhost for Node v16 and older.\n    // @see https://vitejs.dev/config/server-options.html#server-host.\n    dns.setDefaultResultOrder(\"verbatim\")\n\n    // https://vitejs.dev/config/\n    export default defineConfig({\n        plugins: [react()],\n        define: {\n            __BASE__: JSON.stringify(\"/\"),\n            __MEDUSA_BACKEND_URL__: JSON.stringify(\"http://localhost:9000\"),\n        },\n    })\n  "
                        // Create new tailwind.config.js file based on the current one
                    ])));
                    return [4 /*yield*/, fse.readFile(path_1["default"].join(uiPath, "tailwind.config.js"), "utf-8")
                        // Overwrite content field of module.exports in tailwind.config.js
                    ];
                case 2:
                    tailwindConfig = _c.sent();
                    newTailwindConfig = tailwindConfig.replace(/content:\s*\[[\s\S]*?\]/, "content: [\"src/**/*.{js,ts,jsx,tsx}\", \"./index.html\"]");
                    // Remove require of "path" in tailwind.config.js
                    newTailwindConfig = newTailwindConfig.replace(/const path = require\("path"\)/, "");
                    postcssConfig = (0, ts_dedent_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    module.exports = {\n        plugins: {\n            \"tailwindcss/nesting\": {},\n            tailwindcss: {},\n            autoprefixer: {},\n        }\n    }\n"], ["\n    module.exports = {\n        plugins: {\n            \"tailwindcss/nesting\": {},\n            tailwindcss: {},\n            autoprefixer: {},\n        }\n    }\n"])));
                    tmpPath = path_1["default"].join(process.cwd(), outDir);
                    return [4 /*yield*/, fse.copy(uiPath, tmpPath)];
                case 3:
                    _c.sent();
                    return [4 /*yield*/, fse.remove(path_1["default"].join(tmpPath, "tailwind.config.js"))];
                case 4:
                    _c.sent();
                    return [4 /*yield*/, fse.remove(path_1["default"].join(tmpPath, "postcss.config.js"))];
                case 5:
                    _c.sent();
                    return [4 /*yield*/, fse.writeJSON(path_1["default"].join(tmpPath, "package.json"), pkg)];
                case 6:
                    _c.sent();
                    return [4 /*yield*/, fse.writeFile(path_1["default"].join(tmpPath, "vite.config.ts"), viteConfig)];
                case 7:
                    _c.sent();
                    return [4 /*yield*/, fse.writeFile(path_1["default"].join(tmpPath, "tailwind.config.cjs"), newTailwindConfig)];
                case 8:
                    _c.sent();
                    return [4 /*yield*/, fse.writeFile(path_1["default"].join(tmpPath, "postcss.config.cjs"), postcssConfig)];
                case 9:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports["default"] = eject;
var templateObject_1, templateObject_2;
