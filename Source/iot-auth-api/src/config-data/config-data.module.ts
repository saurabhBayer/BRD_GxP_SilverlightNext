import { Module } from "@nestjs/common";
import { ConfigDataController } from "./config-data.controller";
import { ConfigDataService } from "./config-data.service";
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ConfigDataController],
  providers: [ConfigDataService],
})
export class ConfigDataModule {}
