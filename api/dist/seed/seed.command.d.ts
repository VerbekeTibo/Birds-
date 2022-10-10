import { DatabaseSeedService } from './seed.service';
export declare class DatabaseSeedCommand {
    private readonly seedService;
    constructor(seedService: DatabaseSeedService);
    seed(): Promise<void>;
    delete(): Promise<void>;
}
