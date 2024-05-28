import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LogDataModule } from "./log-data/log-data.module";
import { ConfigDataModule } from "./config-data/config-data.module";
import { UserProfilesModule } from "./user-profiles/user-profiles.module";
import { UsersModule } from "./users/users.module";
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    LogDataModule,
    ConfigDataModule,
    UserProfilesModule,
    UsersModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
