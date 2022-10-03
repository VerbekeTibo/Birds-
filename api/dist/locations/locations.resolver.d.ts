import { LocationsService } from './locations.service';
import { Location } from './entities/location.entity';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';
import { ClientMessage } from '../bootstrap/entities/ClientMessages';
import { ObservationsService } from 'src/observations/observations.service';
import { Observation } from 'src/observations/entities/observation.entity';
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
