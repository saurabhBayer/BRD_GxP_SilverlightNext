import { BadRequestException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Db, ObjectId } from "mongodb";
import { UserProfile } from "./user-profiles.entity";
import { CreateUserProfile } from "./create-user-profiles.dto";
import { UpdateUserProfile } from "./update-user-profiles.dto";
import { DATABASE_CONSTANTS } from "src/database/database.constants";

@Injectable()
export class UserProfileService {
  constructor(
    @Inject(DATABASE_CONSTANTS.DATABASE_CONNECTION)
    private db: Db,
  ) {}


  async find(): Promise<UserProfile[]> {
    return (await this.db.collection(DATABASE_CONSTANTS.COLLECTION_NAME_UserProfiles).find().toArray()) as unknown as UserProfile[];
  }

  async findOne(id: string): Promise<UserProfile> {
    if (!ObjectId.isValid(id)) {
      throw new BadRequestException;
    }

    const response = (await this.db.collection(DATABASE_CONSTANTS.COLLECTION_NAME_UserProfiles).findOne({
      logId: id,
    })) as unknown as UserProfile;

    if (!response) {
      throw new NotFoundException;
    }

    return response;
  }

  async create(body: CreateUserProfile): Promise<void> {
    await this.db.collection(DATABASE_CONSTANTS.COLLECTION_NAME_UserProfiles).insertOne(body);
  }

  async update(id: string, body: UpdateUserProfile): Promise<void> {
    if (!ObjectId.isValid(id)) {
      throw new BadRequestException;
    }

    await this.db.collection(DATABASE_CONSTANTS.COLLECTION_NAME_UserProfiles).updateOne(
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

    const response = await this.db.collection(DATABASE_CONSTANTS.COLLECTION_NAME_UserProfiles).deleteOne({
      _id: new ObjectId(id),
    });

    if (response.deletedCount === 0) {
      throw new NotFoundException;
    }
  }
}
