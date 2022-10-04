import { Observation } from 'src/observations/entities/observation.entity';
import { ObjectId } from 'mongodb';
export declare class Location {
    id: ObjectId;
    name: string;
    observationsId: string;
    observations: Observation[];
    location: string;
    createdAt?: Date;
    updatedAt?: Date;
}
