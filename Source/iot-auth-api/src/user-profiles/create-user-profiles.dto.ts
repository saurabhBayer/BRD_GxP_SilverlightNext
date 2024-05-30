import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserProfile {
  @IsNotEmpty()
  @IsString()
  readonly userDbId: string;
  @IsNotEmpty()
  @IsString()
  readonly userName: string;
  @IsNotEmpty()
  @IsString()
  readonly userPassword: string;
  @IsNotEmpty()
  @IsString()
  readonly userFirstName: string;
  @IsNotEmpty()
  @IsString()
  readonly userMiddleName: string;
  @IsNotEmpty()
  @IsString()
  readonly userLastName: string;
  @IsNotEmpty()
  @IsString()
  readonly userType: string;
  @IsNotEmpty()
  @IsString()
  readonly userProductType: string;
  @IsString()
  readonly userProductInjectorIDs: string;
  @IsNotEmpty()
  @IsString()
  readonly userTokenExpiryTime: string;
  @IsNotEmpty()
  @IsString()
  readonly userLicenseExpirationDateTime: string;
  @IsNotEmpty()
  @IsString()
  readonly userEmailId: string;
  @IsNotEmpty()
  @IsString()
  readonly userIsActive: string;
  @IsString()
  readonly userTypeId: string;
  @IsString()
  readonly userCurrentLoggedIn: string;
  @IsString()
  readonly userLastLoginTime: string;
  @IsString()
  readonly userLastLoginLocation: string;
  @IsString()
  readonly userCountry: string;
  @IsString()
  readonly userDeviceinfo: string;
  @IsString()
  readonly userSourceSystem: string;
  @IsString()
  readonly userOrganizationName: string;
  @IsString()
  readonly userTag: string;
  @IsString()
  readonly userCreatedBySystemName: string;
  @IsString()
  readonly userIsDevToolsAccess: string;
  @IsString()
  readonly userPLCAccess: string;
  @IsString()
  readonly userCreatedDateTime: string;
  @IsString()
  readonly userCreatedBy: string;
  @IsString()
  readonly userUpdatedDateTime: string;
  @IsString()
  readonly userUpdatedBy: string;
}

