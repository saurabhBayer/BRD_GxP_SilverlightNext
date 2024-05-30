import { IsNotEmpty, IsString } from "class-validator";

export class CreateLogData {
  //(create data to object)
  @IsNotEmpty()
  @IsString()
  readonly LogDbId: string;

  @IsNotEmpty()
  @IsString()
  readonly LogEventDateTime: string;

  @IsNotEmpty()
  @IsString()
  readonly LogEventType: string;

  @IsNotEmpty()
  @IsString()
  readonly LogSrcSystem: string;

  @IsNotEmpty()
  @IsString()
  readonly LogUserName: string;

  @IsNotEmpty()
  @IsString()
  readonly LogMessage: string;
}
