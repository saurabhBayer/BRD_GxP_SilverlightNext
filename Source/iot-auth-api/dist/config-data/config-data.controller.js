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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigDataController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const config_data_service_1 = require("./config-data.service");
const config_data_entity_1 = require("./config-data.entity");
let ConfigDataController = class ConfigDataController {
    constructor(configDataService) {
        this.configDataService = configDataService;
    }
    getAll(sourceSystem) {
        return this.configDataService.getAll(+sourceSystem);
    }
};
exports.ConfigDataController = ConfigDataController;
__decorate([
    (0, common_1.Get)(":sourceSystem"),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Records Found",
        type: config_data_entity_1.ConfigData,
    }),
    __param(0, (0, common_1.Param)("sourceSystem")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", config_data_entity_1.ConfigData)
], ConfigDataController.prototype, "getAll", null);
exports.ConfigDataController = ConfigDataController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)("config-data"),
    (0, common_1.Controller)("config-data"),
    __metadata("design:paramtypes", [config_data_service_1.ConfigDataService])
], ConfigDataController);
//# sourceMappingURL=config-data.controller.js.map