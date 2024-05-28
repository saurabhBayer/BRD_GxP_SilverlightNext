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
exports.ConfigDataService = void 0;
const common_1 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
const database_constants_1 = require("../database/database.constants");
let ConfigDataService = class ConfigDataService {
    constructor(db) {
        this.db = db;
    }
    async find() {
        return (await this.db.collection(database_constants_1.DATABASE_CONSTANTS.COLLECTION_NAME_ConfigData).find().toArray());
    }
    async findOne(id) {
        if (!mongodb_1.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException;
        }
        const response = (await this.db.collection(database_constants_1.DATABASE_CONSTANTS.COLLECTION_NAME_ConfigData).findOne({
            configId: id,
        }));
        if (!response) {
            throw new common_1.NotFoundException;
        }
        return response;
    }
    async create(body) {
        await this.db.collection(database_constants_1.DATABASE_CONSTANTS.COLLECTION_NAME_ConfigData).insertOne(body);
    }
    async update(id, body) {
        if (!mongodb_1.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException;
        }
        await this.db.collection(database_constants_1.DATABASE_CONSTANTS.COLLECTION_NAME_ConfigData).updateOne({
            _id: new mongodb_1.ObjectId(id),
        }, {
            $set: {
                ...body,
            },
        });
    }
    async delete(id) {
        if (!mongodb_1.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException;
        }
        const response = await this.db.collection(database_constants_1.DATABASE_CONSTANTS.COLLECTION_NAME_ConfigData).deleteOne({
            _id: new mongodb_1.ObjectId(id),
        });
        if (response.deletedCount === 0) {
            throw new common_1.NotFoundException;
        }
    }
};
exports.ConfigDataService = ConfigDataService;
exports.ConfigDataService = ConfigDataService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(database_constants_1.DATABASE_CONSTANTS.DATABASE_CONNECTION)),
    __metadata("design:paramtypes", [mongodb_1.Db])
], ConfigDataService);
//# sourceMappingURL=config-data.service.js.map