import { BadRequestException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Db, ObjectId } from "mongodb";
import { CreateLogData } from "./create-log-data.dto";
import { DATABASE_CONSTANTS } from "src/database/database.constants";
import { LogData } from "./log-data.entity";

@Injectable()
export class LogDataService {
  constructor(
    @Inject(DATABASE_CONSTANTS.DATABASE_CONNECTION)
    private db: Db,
  ) {}


  async find(): Promise<LogData[]> {
    return (await this.db.collection(DATABASE_CONSTANTS.COLLECTION_NAME_LogData).find().toArray()) as unknown as LogData[];
  }

  async create(body: CreateLogData): Promise<void> {
    await this.db.collection(DATABASE_CONSTANTS.COLLECTION_NAME_LogData).insertOne(body);
  }
}
