import { Bird } from './entities/bird.entity';
import { BirdsService } from './birds.service';
import { CreateBirdInput } from './dto/create-bird.input';
import { UpdateBirdInput } from './dto/update-bird.input';
export declare class BirdsResolver {
    private readonly birdsService;
    constructor(birdsService: BirdsService);
    createBird(createBirdInput: CreateBirdInput): Promise<Bird>;
    findAll(): Promise<Bird[]>;
    findOne(id: string): Promise<Bird>;
    updateBird(updateBirdInput: UpdateBirdInput): Promise<Bird>;
    removeBird(id: string): Promise<void>;
}
