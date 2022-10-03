import { Bird } from '../birds/entities/bird.entity';
import { Repository } from 'typeorm';
export declare class DatabaseSeedService {
    private birdsRepository;
    constructor(birdsRepository: Repository<Bird>);
    addAllBirds(): Promise<Bird[]>;
    deleteAllBirds(): Promise<void>;
}
