import { Injectable } from "@nestjs/common";
import { ConfigData } from "./config-data.entity";

@Injectable()
export class ConfigDataService {
  private readonly configData: ConfigData[] = [];

  getAll(id: number): ConfigData {
    return this.configData[id];
  }
}
