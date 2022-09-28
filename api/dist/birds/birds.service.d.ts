import { DeleteResult, Repository } from 'typeorm';
import { CreateBirdInput } from './dto/create-bird.input';
import { UpdateBirdInput } from './dto/update-bird.input';
import { Bird } from './entities/bird.entity';
export declare class BirdsService {
    private readonly birdRepository;
    constructor(birdRepository: Repository<Bird>);
    create(createBirdInput: CreateBirdInput): Promise<Bird>;
    findAll(): Promise<Bird[]>;
    findOne(id: string): Promise<Bird>;
    update(updateBirdInput: UpdateBirdInput): Promise<Bird>;
    remove(id: string): Promise<DeleteResult>;
}
