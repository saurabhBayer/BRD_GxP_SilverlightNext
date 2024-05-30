import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LogDataModule } from "./log-data/log-data.module";
import { UserProfilesModule } from "./user-profiles/user-profiles.module";
import { DatabaseModule } from './database/database.module';
import { ConfigDataModule } from "./config-data/config-data.module";

@Module({
  imports: [
    LogDataModule,
    ConfigDataModule,
    UserProfilesModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
