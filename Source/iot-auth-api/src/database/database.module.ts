import { Module } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';
import { DATABASE_CONSTANTS } from './database.constants';

@Module({
    providers: [
        {
            provide: DATABASE_CONSTANTS.DATABASE_CONNECTION,
            useFactory: async (): Promise<Db> => {
                try {
                    //Logger.setLevel('debug');

                    const client = await MongoClient.connect(DATABASE_CONSTANTS.DATABASE_URL, {
                        //todo: check about this one useUnifiedTopology: true,
                    });

                    const db = client.db(DATABASE_CONSTANTS.DATABASE_NAME);

                    await db.collection(DATABASE_CONSTANTS.COLLECTION_NAME_ConfigData).createIndex({ configId: 1 }, { unique: true, sparse: true });
                    await db.collection(DATABASE_CONSTANTS.COLLECTION_NAME_LogData).createIndex({ logId: 1 }, { unique: true, sparse: true });
                    await db.collection(DATABASE_CONSTANTS.COLLECTION_NAME_UserProfiles).createIndex({ profileId: 1 }, { unique: true, sparse: true });
                    await db.collection(DATABASE_CONSTANTS.COLLECTION_NAME_Users).createIndex({ userId: 1 }, { unique: true, sparse: true });

                    return db;
                } catch (e) {
                    throw e;
                }
            }
        },
    ],
    exports: [DATABASE_CONSTANTS.DATABASE_CONNECTION],
})
export class DatabaseModule { }
