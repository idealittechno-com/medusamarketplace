"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesChannel = void 0;
var typeorm_1 = require("typeorm");
var feature_flag_decorators_1 = require("../utils/feature-flag-decorators");
var interfaces_1 = require("../interfaces");
var utils_1 = require("../utils");
var sales_channel_location_1 = require("./sales-channel-location");
var SalesChannel = /** @class */ (function (_super) {
    __extends(SalesChannel, _super);
    function SalesChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    SalesChannel.prototype.beforeInsert = function () {
        this.id = (0, utils_1.generateEntityId)(this.id, "sc");
    };
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], SalesChannel.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
        __metadata("design:type", Object)
    ], SalesChannel.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: false }),
        __metadata("design:type", Boolean)
    ], SalesChannel.prototype, "is_disabled", void 0);
    __decorate([
        (0, utils_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], SalesChannel.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return sales_channel_location_1.SalesChannelLocation; }, function (scLocation) { return scLocation.sales_channel; }, {
            cascade: ["soft-remove", "remove"],
        }),
        __metadata("design:type", Array)
    ], SalesChannel.prototype, "locations", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SalesChannel.prototype, "beforeInsert", null);
    SalesChannel = __decorate([
        (0, feature_flag_decorators_1.FeatureFlagEntity)("sales_channels")
    ], SalesChannel);
    return SalesChannel;
}(interfaces_1.SoftDeletableEntity));
exports.SalesChannel = SalesChannel;
/**
 * @schema SalesChannel
 * title: "Sales Channel"
 * description: "A Sales Channel is a method a business offers its products for purchase for the customers. For example, a Webshop can be a sales channel, and a mobile app can be another."
 * type: object
 * required:
 *   - created_at
 *   - deleted_at
 *   - description
 *   - id
 *   - is_disabled
 *   - name
 *   - updated_at
 * properties:
 *  id:
 *    description: The sales channel's ID
 *    type: string
 *    example: sc_01G8X9A7ESKAJXG2H0E6F1MW7A
 *  name:
 *    description: The name of the sales channel.
 *    type: string
 *    example: Market
 *  description:
 *    description: The description of the sales channel.
 *    nullable: true
 *    type: string
 *    example: Multi-vendor market
 *  is_disabled:
 *    description: Specify if the sales channel is enabled or disabled.
 *    type: boolean
 *    default: false
 *  locations:
 *    description: The details of the stock locations related to the sales channel.
 *    type: array
 *    x-expandable: "locations"
 *    items:
 *      $ref: "#/components/schemas/SalesChannelLocation"
 *  created_at:
 *    description: The date with timezone at which the resource was created.
 *    type: string
 *    format: date-time
 *  updated_at:
 *    description: The date with timezone at which the resource was updated.
 *    type: string
 *    format: date-time
 *  deleted_at:
 *    description: The date with timezone at which the resource was deleted.
 *    nullable: true
 *    type: string
 *    format: date-time
 *  metadata:
 *    description: An optional key-value map with additional details
 *    nullable: true
 *    type: object
 *    example: {car: "white"}
 *    externalDocs:
 *      description: "Learn about the metadata attribute, and how to delete and update it."
 *      url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
//# sourceMappingURL=sales-channel.js.map