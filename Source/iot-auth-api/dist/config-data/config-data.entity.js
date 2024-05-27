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
exports.ConfigData = void 0;
const swagger_1 = require("@nestjs/swagger");
class ConfigData {
}
exports.ConfigData = ConfigData;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Passlink ConfigData Id" }),
    __metadata("design:type", String)
], ConfigData.prototype, "configId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "tokenExpiresIn", description: "Passlink ConfigData Name" }),
    __metadata("design:type", String)
], ConfigData.prototype, "keyName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "7d", description: "Passlink ConfigData keyValue" }),
    __metadata("design:type", String)
], ConfigData.prototype, "keyValue", void 0);
//# sourceMappingURL=config-data.entity.js.map