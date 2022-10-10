import { ObservationsService } from './observations.service';
import { Observation } from './entities/observation.entity';
import { CreateObservationInput } from './dto/create-observation.input';
import { UpdateObservationInput } from './dto/update-observation.input';
import { BirdsService } from 'src/birds/birds.service';
import { LocationsService } from 'src/locations/locations.service';
import { Bird } from '../birds/entities/bird.entity';
import { Location } from '../locations/entities/location.entity';
import { ClientMessage } from '../bootstrap/entities/ClientMessage';
export declare class ObservationsResolver {
    private readonly observationsService;
    private readonly birdService;
    private readonly locationService;
    constructor(observationsService: ObservationsService, birdService: BirdsService, locationService: LocationsService);
    bird(o: Observation): Promise<Bird>;
    location(o: Observation): Promise<Location>;
    createObservation(createObservationInput: CreateObservationInput): Promise<Observation>;
    findAll(): Promise<Observation[]>;
    findOne(id: string): Promise<Observation>;
    updateObservation(updateObservationInput: UpdateObservationInput): Promise<Observation>;
    removeObservation(id: string): Promise<ClientMessage>;
}
