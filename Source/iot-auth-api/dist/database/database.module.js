"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
const database_constants_1 = require("./database.constants");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        providers: [
            {
                provide: database_constants_1.DATABASE_CONSTANTS.DATABASE_CONNECTION,
                useFactory: async () => {
                    try {
                        const client = await mongodb_1.MongoClient.connect(database_constants_1.DATABASE_CONSTANTS.DATABASE_URL, {});
                        const db = client.db(database_constants_1.DATABASE_CONSTANTS.DATABASE_NAME);
                        await db.collection(database_constants_1.DATABASE_CONSTANTS.COLLECTION_NAME_ConfigData).createIndex({ configId: 1 }, { unique: true, sparse: true });
                        await db.collection(database_constants_1.DATABASE_CONSTANTS.COLLECTION_NAME_LogData).createIndex({ logId: 1 }, { unique: true, sparse: true });
                        await db.collection(database_constants_1.DATABASE_CONSTANTS.COLLECTION_NAME_UserProfiles).createIndex({ profileId: 1 }, { unique: true, sparse: true });
                        await db.collection(database_constants_1.DATABASE_CONSTANTS.COLLECTION_NAME_Users).createIndex({ userId: 1 }, { unique: true, sparse: true });
                        return db;
                    }
                    catch (e) {
                        throw e;
                    }
                }
            },
        ],
        exports: [database_constants_1.DATABASE_CONSTANTS.DATABASE_CONNECTION],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map