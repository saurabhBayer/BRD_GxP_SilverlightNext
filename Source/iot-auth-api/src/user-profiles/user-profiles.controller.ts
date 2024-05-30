import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { UserProfile } from "./user-profiles.entity";
import { CreateUserProfile } from "./create-user-profiles.dto";
import { UpdateUserProfile } from "./update-user-profiles.dto";
import { UserProfileService } from "./user-profiles.service";


@ApiBearerAuth()
@ApiTags("user-profile-data")
@Controller("user-profile-data")
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @Get(":sourceSystem")
  @ApiOperation({ summary: 'Get user profile Items' })
  @ApiResponse({
    status: 200,
    description: "Records Found",
    type: UserProfile,
  }) 
  async getAlllogData(@Param("sourceSystem") sourceSystem: string): Promise<UserProfile[]> {
    // todo: log the sourceSystem
    return this.userProfileService.find();
  }

  @Get(":sourceSystem, :UserDbId")
  @ApiOperation({ summary: 'Get user profile  Item By Id' })
  @ApiResponse({
    status: 200,
    description: "Record Found",
    type: UserProfile,
  })
  async getBylogDataId(@Param("sourceSystem") sourceSystem: string, @Param("UserDbId") UserDbId: string): Promise<UserProfile> {
    // todo: log the sourceSystem
    return this.userProfileService.findOne(UserDbId);
  }

  @Post()
  @ApiOperation({ summary: 'Create user profile Item' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async addlogData(@Param("sourceSystem") sourceSystem: string, @Body() createlogDataDto: CreateUserProfile): Promise<void> {
       // todo: log the sourceSystem
    return this.userProfileService.create(createlogDataDto);
  }

  @Put()
  @ApiOperation({ summary: 'Update user profile Item' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async updatelogData(@Param("sourceSystem") sourceSystem: string, @Param('id') id: string, @Body() updatelogDataDto: UpdateUserProfile): Promise<void> {
       // todo: log the sourceSystem
    return this.userProfileService.update(id, updatelogDataDto);
  }
}
