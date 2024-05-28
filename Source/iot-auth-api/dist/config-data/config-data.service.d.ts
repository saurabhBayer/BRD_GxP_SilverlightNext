import { Db } from "mongodb";
import { UpdateConfigData } from "./update-config-data.dto";
import { CreateConfigData } from "./create-config-data.dto";
import { ConfigData } from "./config-data.entity";
export declare class ConfigDataService {
    private db;
    constructor(db: Db);
    find(): Promise<ConfigData[]>;
    findOne(id: string): Promise<ConfigData>;
    create(body: CreateConfigData): Promise<void>;
    update(id: string, body: UpdateConfigData): Promise<void>;
    delete(id: string): Promise<void>;
}
