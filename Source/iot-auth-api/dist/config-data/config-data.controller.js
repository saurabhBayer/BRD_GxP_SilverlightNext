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
const create_config_data_dto_1 = require("./create-config-data.dto");
const update_config_data_dto_1 = require("./update-config-data.dto");
let ConfigDataController = class ConfigDataController {
    constructor(configDataService) {
        this.configDataService = configDataService;
    }
    async getAllConfigData(sourceSystem) {
        return this.configDataService.find();
    }
    async getByConfigDataId(sourceSystem, configId) {
        return this.configDataService.findOne(configId);
    }
    async addConfigData(sourceSystem, createConfigDataDto) {
        return this.configDataService.create(createConfigDataDto);
    }
    async updateConfigData(sourceSystem, id, updateConfigDataDto) {
        return this.configDataService.update(id, updateConfigDataDto);
    }
};
exports.ConfigDataController = ConfigDataController;
__decorate([
    (0, common_1.Get)(":sourceSystem"),
    (0, swagger_1.ApiOperation)({ summary: 'Get Config Items' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Records Found",
        type: config_data_entity_1.ConfigData,
    }),
    __param(0, (0, common_1.Param)("sourceSystem")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConfigDataController.prototype, "getAllConfigData", null);
__decorate([
    (0, common_1.Get)(":sourceSystem, :configId"),
    (0, swagger_1.ApiOperation)({ summary: 'Get Config Item By Id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Record Found",
        type: config_data_entity_1.ConfigData,
    }),
    __param(0, (0, common_1.Param)("sourceSystem")),
    __param(1, (0, common_1.Param)("configId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ConfigDataController.prototype, "getByConfigDataId", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create Config Item' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Param)("sourceSystem")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_config_data_dto_1.CreateConfigData]),
    __metadata("design:returntype", Promise)
], ConfigDataController.prototype, "addConfigData", null);
__decorate([
    (0, common_1.Put)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update Config Item' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Param)("sourceSystem")),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_config_data_dto_1.UpdateConfigData]),
    __metadata("design:returntype", Promise)
], ConfigDataController.prototype, "updateConfigData", null);
exports.ConfigDataController = ConfigDataController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)("config-data"),
    (0, common_1.Controller)("config-data"),
    __metadata("design:paramtypes", [config_data_service_1.ConfigDataService])
], ConfigDataController);
//# sourceMappingURL=config-data.controller.js.map