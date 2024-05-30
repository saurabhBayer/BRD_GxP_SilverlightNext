import { ApiProperty } from "@nestjs/swagger";

export class UserProfile {
  /**
   * The name of the UserProfile
   * @example tokenExpiresIn
   */

  @ApiProperty({ example: 1, description: "MongoDb Id" })
  _id: string;

  @ApiProperty({ example: 1, description: "UserDbId" })
  userDbId: string;

  @ApiProperty({ example: 1, description: "UserName" })
  userName: string;

  @ApiProperty({ example: 1, description: "UserPassword" })
  userPassword: string;

  @ApiProperty({ example: 1, description: "UserFirstName" })
  userFirstName: string;

  @ApiProperty({ example: 1, description: "UserMiddleName" })
  userMiddleName: string;

  @ApiProperty({ example: 1, description: "UserLastName" })
  userLastName: string;

  @ApiProperty({ example: 1, description: "UserType" })
  userType: string;

  @ApiProperty({ example: 1, description: "UserProductType" })
  userProductType: string;

  @ApiProperty({ example: 1, description: "UserProductInjectorIDs" })
  userProductInjectorIDs: string;

  @ApiProperty({ example: 1, description: "UserTokenExpiryTime" })
  userTokenExpiryTime: string;

  @ApiProperty({ example: 1, description: "UserLicenseExpirationDateTime" })
  userLicenseExpirationDateTime: string;

  @ApiProperty({ example: 1, description: "UserEmailId" })
  userEmailId: string;

  @ApiProperty({ example: 1, description: "UserIsActive" })
  userIsActive: boolean;

  @ApiProperty({ example: 1, description: "UserTypeId" })
  userTypeId: string;

  @ApiProperty({ example: 1, description: "UserCurrentLoggedIn" })
  userCurrentLoggedIn: boolean;

  @ApiProperty({ example: 1, description: "UserLastLoginTime" })
  userLastLoginTime: string;

  @ApiProperty({ example: 1, description: "UserLastLoginLocation" })
  userLastLoginLocation: string;

  @ApiProperty({ example: 1, description: "UserCountry" })
  userCountry: string;

  @ApiProperty({ example: 1, description: "UserDeviceinfo" })
  userDeviceinfo: string;

  @ApiProperty({ example: 1, description: "UserSourceSystem" })
  userSourceSystem: string;

  @ApiProperty({ example: 1, description: "UserOrganizationName" })
  userOrganizationName: string;

  @ApiProperty({ example: 1, description: "UserTag" })
  userTag: string;

  @ApiProperty({ example: 1, description: "UserCreatedBySystemName" })
  userCreatedBySystemName: string;

  @ApiProperty({ example: 1, description: "UserIsDevToolsAccess" })
  userIsDevToolsAccess: boolean;

  @ApiProperty({ example: 1, description: "UserPLCAccess" })
  userPLCAccess: boolean;

  @ApiProperty({ example: 1, description: "UserCreatedDateTime" })
  userCreatedDateTime: string;

  @ApiProperty({ example: 1, description: "UserCreatedBy" })
  userCreatedBy: string;

  @ApiProperty({ example: 1, description: "UserUpdatedDateTime" })
  userUpdatedDateTime: string;

  @ApiProperty({ example: 1, description: "UserUpdatedBy" })
  userUpdatedBy: string;
}
