import { Module } from "@nestjs/common";
import { ConfigDataController } from "./config-data.controller";
import { ConfigDataService } from "./config-data.service";

@Module({
  controllers: [ConfigDataController],
  providers: [ConfigDataService],
})
export class ConfigDataModule {}
