import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { ConfigDataService } from "./config-data.service";
import { ConfigData } from "./config-data.entity";
import { CreateConfigData } from "./create-config-data.dto";
import { UpdateConfigData } from "./update-config-data.dto";

@ApiBearerAuth()
@ApiTags("config-data")
@Controller("config-data")
export class ConfigDataController {
  constructor(private readonly configDataService: ConfigDataService) {}

  @Get(":sourceSystem")
  @ApiOperation({ summary: 'Get Config Items' })
  @ApiResponse({
    status: 200,
    description: "Records Found",
    type: ConfigData,
  }) 
  async getAllConfigData(@Param("sourceSystem") sourceSystem: string): Promise<ConfigData[]> {
    // todo: log the sourceSystem
    return this.configDataService.find();
  }

  @Get(":sourceSystem, :configId")
  @ApiOperation({ summary: 'Get Config Item By Id' })
  @ApiResponse({
    status: 200,
    description: "Record Found",
    type: ConfigData,
  })
  async getByConfigDataId(@Param("sourceSystem") sourceSystem: string, @Param("configId") configId: string): Promise<ConfigData> {
    // todo: log the sourceSystem
    return this.configDataService.findOne(configId);
  }

  @Post()
  @ApiOperation({ summary: 'Create Config Item' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async addConfigData(@Param("sourceSystem") sourceSystem: string, @Body() createConfigDataDto: CreateConfigData): Promise<void> {
       // todo: log the sourceSystem
    return this.configDataService.create(createConfigDataDto);
  }

  @Put()
  @ApiOperation({ summary: 'Update Config Item' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async updateConfigData(@Param("sourceSystem") sourceSystem: string, @Param('id') id: string, @Body() updateConfigDataDto: UpdateConfigData): Promise<void> {
       // todo: log the sourceSystem
    return this.configDataService.update(id, updateConfigDataDto);
  }
}
