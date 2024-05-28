import { BadRequestException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Db, ObjectId } from "mongodb";
import { UpdateConfigData } from "./update-config-data.dto";
import { CreateConfigData } from "./create-config-data.dto";
import { DATABASE_CONSTANTS } from "src/database/database.constants";
import { ConfigData } from "./config-data.entity";

@Injectable()
export class ConfigDataService {
  constructor(
    @Inject(DATABASE_CONSTANTS.DATABASE_CONNECTION)
    private db: Db,
  ) {}


  async find(): Promise<ConfigData[]> {
    return (await this.db.collection(DATABASE_CONSTANTS.COLLECTION_NAME_ConfigData).find().toArray()) as unknown as ConfigData[];
  }

  async findOne(id: string): Promise<ConfigData> {
    if (!ObjectId.isValid(id)) {
      throw new BadRequestException;
    }

    const response = (await this.db.collection(DATABASE_CONSTANTS.COLLECTION_NAME_ConfigData).findOne({
      configId: id,
    })) as unknown as ConfigData;

    if (!response) {
      throw new NotFoundException;
    }

    return response;
  }

  async create(body: CreateConfigData): Promise<void> {
    await this.db.collection(DATABASE_CONSTANTS.COLLECTION_NAME_ConfigData).insertOne(body);
  }

  async update(id: string, body: UpdateConfigData): Promise<void> {
    if (!ObjectId.isValid(id)) {
      throw new BadRequestException;
    }

    await this.db.collection(DATABASE_CONSTANTS.COLLECTION_NAME_ConfigData).updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          ...body,
        },
      },
    );
  }

  async delete(id: string): Promise<void> {
    if (!ObjectId.isValid(id)) {
      throw new BadRequestException;
    }

    const response = await this.db.collection(DATABASE_CONSTANTS.COLLECTION_NAME_ConfigData).deleteOne({
      _id: new ObjectId(id),
    });

    if (response.deletedCount === 0) {
      throw new NotFoundException;
    }
  }
}
