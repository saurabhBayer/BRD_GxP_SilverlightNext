import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { ConfigDataService } from "./config-data.service";
import { ConfigData } from "./config-data.entity";

@ApiBearerAuth()
@ApiTags("config-data")
@Controller("config-data")
export class ConfigDataController {
  constructor(private readonly configDataService: ConfigDataService) {}

  @Get(":sourceSystem")
  @ApiResponse({
    status: 200,
    description: "Records Found",
    type: ConfigData,
  })
  getAll(@Param("sourceSystem") sourceSystem: string): ConfigData {
    return this.configDataService.getAll(+sourceSystem);
  }
}
