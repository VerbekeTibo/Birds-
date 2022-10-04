import { LocationsService } from './locations.service';
import { Location } from './entities/location.entity';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';
import { ObservationsService } from 'src/observations/observations.service';
import { Observation } from '../observations/entities/observation.entity';
import { ClientMessage } from '../bootstrap/entities/ClientMessage';
export declare class LocationsResolver {
    private readonly locationsService;
    private readonly observationsService;
    constructor(locationsService: LocationsService, observationsService: ObservationsService);
    observations(l: Location): Promise<Observation>;
    createLocation(createLocationInput: CreateLocationInput): Promise<Location>;
    findAll(): Promise<Location[]>;
    findOne(id: string): Promise<Location>;
    updateLocation(updateLocationInput: UpdateLocationInput): Promise<Location>;
    removeLocation(id: string): Promise<ClientMessage>;
}
