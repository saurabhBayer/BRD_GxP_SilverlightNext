import { ApiProperty } from "@nestjs/swagger";

export class LogData {
  /**
   * The name of the logData
   * @example tokenExpiresIn
   */

  @ApiProperty({ example: "1", description: "MongoDb Id" })
  _id: string;

  @ApiProperty({ example: "1", description: "Passlink logData Id" })
  logDbId: string;

  @ApiProperty({ example: "logEventDateTime", description: "Passlink logEvent DateTime" })
  logEventDateTime: string;

  @ApiProperty({ example: "INFO", description: "Passlink logEvent Type" })
  logEventType: string;

  @ApiProperty({ example: "PLM", description: "log Source System" })
  logSrcSystem: string;

  @ApiProperty({ example: "UserFoo", description: "Passlink logUserName" })
  logUserName: string;

  @ApiProperty({ example: "UserFoo logged In PLM", description: "Passlink logMessage" })
  logMessage: string;
}
