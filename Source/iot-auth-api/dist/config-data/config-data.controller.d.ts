import { ConfigDataService } from "./config-data.service";
import { ConfigData } from "./config-data.entity";
import { CreateConfigData } from "./create-config-data.dto";
import { UpdateConfigData } from "./update-config-data.dto";
export declare class ConfigDataController {
    private readonly configDataService;
    constructor(configDataService: ConfigDataService);
    getAllConfigData(sourceSystem: string): Promise<ConfigData[]>;
    getByConfigDataId(sourceSystem: string, configId: string): Promise<ConfigData>;
    addConfigData(sourceSystem: string, createConfigDataDto: CreateConfigData): Promise<void>;
    updateConfigData(sourceSystem: string, id: string, updateConfigDataDto: UpdateConfigData): Promise<void>;
}
