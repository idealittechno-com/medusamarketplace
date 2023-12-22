"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const config_1 = __importDefault(require("@medusajs/medusa/dist/loaders/config"));
const logged_in_user_1 = require("./middlewares/logged-in-user");
const authenticate_1 = __importDefault(require("@medusajs/medusa/dist/api/middlewares/authenticate"));
// import * as cors from "cors"
const cors_1 = __importDefault(require("cors"));
function default_1(rootDirectory) {
    const router = (0, express_1.Router)();
    const config = (0, config_1.default)(rootDirectory);
    const adminCors = {
        origin: config.projectConfig.admin_cors.split(","),
        credentials: true,
    };
    console.log(":==================adminCors:=============", adminCors);
    // router.use(
    //   '/\/admin\/[^(auth)].*/',
    //   cors(adminCors),
    //   authenticate(),
    //   registerLoggedInUser
    // )
    router.use('/admin/store/', (0, cors_1.default)(adminCors), (0, authenticate_1.default)(), logged_in_user_1.registerLoggedInUser);
    router.use('/admin/products/', (0, cors_1.default)(adminCors), (0, authenticate_1.default)(), logged_in_user_1.registerLoggedInUser);
    router.use('/admin/orders/', (0, cors_1.default)(adminCors), (0, authenticate_1.default)(), logged_in_user_1.registerLoggedInUser);
    return router;
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUNBQWdDO0FBQ2hDLGtGQUErRDtBQUMvRCxpRUFFcUM7QUFDckMsc0dBRXlEO0FBRXpELCtCQUErQjtBQUMvQixnREFBdUI7QUFFdkIsbUJBQXlCLGFBQXFCO0lBQzVDLE1BQU0sTUFBTSxHQUFHLElBQUEsZ0JBQU0sR0FBRSxDQUFBO0lBQ3ZCLE1BQU0sTUFBTSxHQUFHLElBQUEsZ0JBQVksRUFBQyxhQUFhLENBQUMsQ0FBQTtJQUUxQyxNQUFNLFNBQVMsR0FBRztRQUNoQixNQUFNLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNsRCxXQUFXLEVBQUUsSUFBSTtLQUNsQixDQUFBO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsRUFBQyxTQUFTLENBQUMsQ0FBQztJQUNwRSxjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLElBQUk7SUFHSixNQUFNLENBQUMsR0FBRyxDQUNSLGVBQWUsRUFDakIsSUFBQSxjQUFJLEVBQUMsU0FBUyxDQUFDLEVBQ2IsSUFBQSxzQkFBWSxHQUFFLEVBQ2QscUNBQW9CLENBQ3JCLENBQUE7SUFFRCxNQUFNLENBQUMsR0FBRyxDQUNSLGtCQUFrQixFQUNoQixJQUFBLGNBQUksRUFBQyxTQUFTLENBQUMsRUFDakIsSUFBQSxzQkFBWSxHQUFFLEVBQ2QscUNBQW9CLENBQ3JCLENBQUE7SUFFRCxNQUFNLENBQUMsR0FBRyxDQUNSLGdCQUFnQixFQUNkLElBQUEsY0FBSSxFQUFDLFNBQVMsQ0FBQyxFQUNqQixJQUFBLHNCQUFZLEdBQUUsRUFDZCxxQ0FBb0IsQ0FDckIsQ0FBQTtJQUNELE9BQU8sTUFBTSxDQUFBO0FBQ2YsQ0FBQztBQXRDRCw0QkFzQ0MifQ==