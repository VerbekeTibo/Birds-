import { Repository } from 'typeorm';
import { Bird } from '../birds/entities/bird.entity';
export declare class DatabaseSeedService {
    private birdsRepository;
    constructor(birdsRepository: Repository<Bird>);
    addAllBirds(): Promise<Bird[]>;
    deleteAllBirds(): Promise<void>;
}
