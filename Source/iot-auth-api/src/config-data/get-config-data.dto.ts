import { IsInt, IsString } from "class-validator";

export class CreateConfigData {
  //(create data to object)
  @IsString()
  readonly configId: string;

  @IsString()
  readonly keyName: string;

  @IsString()
  readonly keyValue: string;
}
