"use strict";
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
exports.PublishableApiKeySalesChannel = void 0;
var typeorm_1 = require("typeorm");
var PublishableApiKeySalesChannel = /** @class */ (function () {
    function PublishableApiKeySalesChannel() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], PublishableApiKeySalesChannel.prototype, "sales_channel_id", void 0);
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], PublishableApiKeySalesChannel.prototype, "publishable_key_id", void 0);
    PublishableApiKeySalesChannel = __decorate([
        (0, typeorm_1.Entity)()
    ], PublishableApiKeySalesChannel);
    return PublishableApiKeySalesChannel;
}());
exports.PublishableApiKeySalesChannel = PublishableApiKeySalesChannel;
/**
 * @schema PublishableApiKeySalesChannel
 * title: "Publishable API Key Sales Channel"
 * description: "This represents the association between the Publishable API keys and Sales Channels"
 * type: object
 * required:
 *   - publishable_key_id
 *   - sales_channel_id
 * properties:
 *   sales_channel_id:
 *     description: The sales channel's ID
 *     type: string
 *     example: sc_01G1G5V21KADXNGH29BJMAJ4B4
 *   publishable_key_id:
 *     description: The publishable API key's ID
 *     type: string
 *     example: pak_01G1G5V21KADXNGH29BJMAJ4B4
 */
//# sourceMappingURL=publishable-api-key-sales-channel.js.map