import { ConfigDataService } from "./config-data.service";
import { ConfigData } from "./config-data.entity";
export declare class ConfigDataController {
    private readonly configDataService;
    constructor(configDataService: ConfigDataService);
    getAll(sourceSystem: string): ConfigData;
}
