import { IsOptional, IsString } from "class-validator";

export class UpdateConfigData {
  //(create data to object)
  @IsOptional()
  @IsString()
  readonly configId: string;

  @IsOptional()
  @IsString()
  readonly keyName: string;

  @IsOptional()
  @IsString()
  readonly keyValue: string;
}
