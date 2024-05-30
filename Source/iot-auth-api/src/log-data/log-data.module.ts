import { Module } from "@nestjs/common";
import { DatabaseModule } from '../database/database.module';
import { LogDataService } from "./log-data.service";
import { LogDataController } from "./log-data.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [LogDataController],
  providers: [LogDataService],
})
export class LogDataModule {}
