import { ObjectId } from 'mongodb';
import { Bird } from 'src/birds/entities/bird.entity';
import { Location } from 'src/locations/entities/location.entity';
export declare class Observation {
    id: ObjectId;
    name: string;
    userId?: string;
    weather?: string;
    bird: Bird;
    birdId: string;
    location: Location;
    locationId: string;
    description?: string;
    active?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
