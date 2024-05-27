import { ApiProperty } from "@nestjs/swagger";

export class ConfigData {
  /**
   * The name of the ConfigData
   * @example tokenExpiresIn
   */
  name: string;

  @ApiProperty({ example: 1, description: "Passlink ConfigData Id" })
  configId: string;

  @ApiProperty({ example: "tokenExpiresIn", description: "Passlink ConfigData Name" })
  keyName: string;

  @ApiProperty({ example: "7d", description: "Passlink ConfigData keyValue" })
  keyValue: string;
}
