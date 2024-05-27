import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LogDataModule } from "./log-data/log-data.module";
import { ConfigDataModule } from "./config-data/config-data.module";
import { UserProfileDataModule } from "./user-profile-data/user-profile-data.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    LogDataModule,
    ConfigDataModule,
    UserProfileDataModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
