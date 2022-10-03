import { CreateObservationInput } from './dto/create-observation.input';
import { UpdateObservationInput } from './dto/update-observation.input';
import { Repository } from 'typeorm';
import { Observation } from './entities/observation.entity';
export declare class ObservationsService {
    private readonly observationRepository;
    constructor(observationRepository: Repository<Observation>);
    create(createObservationInput: CreateObservationInput): Promise<Observation>;
    findAll(): Promise<Observation[]>;
    findOne(id: string): Promise<Observation>;
    update(updateObservationInput: UpdateObservationInput): Promise<Observation>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
