import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { UserProfileService } from "./user-profiles.service";
import { UserProfileController } from "./user-profiles.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [UserProfileController],
    providers: [UserProfileService],
  })
export class UserProfilesModule {}
