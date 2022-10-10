import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';
import { Location } from './entities/location.entity';
import { DeleteResult, Repository } from 'typeorm';
export declare class LocationsService {
    private readonly locationRepository;
    constructor(locationRepository: Repository<Location>);
    create(createLocationInput: CreateLocationInput): Promise<Location>;
    findAll(): Promise<Location[]>;
    findOne(id: string): Promise<Location>;
    update(updateLocationInput: UpdateLocationInput): Promise<Location>;
    remove(id: string): Promise<DeleteResult>;
}
