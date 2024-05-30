import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { LogDataService } from "./log-data.service";
import { LogData } from "./log-data.entity";
import { CreateLogData } from "./create-log-data.dto";

@ApiBearerAuth()
@ApiTags("log-data")
@Controller("log-data")
export class LogDataController {
  constructor(private readonly logDataService: LogDataService) {}

  @Get(":sourceSystem")
  @ApiOperation({ summary: 'Get log Items' })
  @ApiResponse({
    status: 200,
    description: "Records Found",
    type: LogData,
  }) 
  async getAlllogData(@Param("sourceSystem") sourceSystem: string): Promise<LogData[]> {
    // todo: log the sourceSystem
    return this.logDataService.find();
  }

  @Post()
  @ApiOperation({ summary: 'Create log Item' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async addlogData(@Param("sourceSystem") sourceSystem: string, @Body() createLogData: CreateLogData): Promise<void> {
       // todo: log the sourceSystem
    return this.logDataService.create(createLogData);
  }
}
