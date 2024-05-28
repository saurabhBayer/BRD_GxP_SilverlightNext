import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateConfigData {
  //(create data to object)
  @IsNotEmpty()
  @IsString()
  readonly configId: string;

  @IsNotEmpty()
  @IsString()
  readonly keyName: string;

  @IsNotEmpty()
  @IsString()
  readonly keyValue: string;
}
