import { ObjectId } from 'mongodb';
import { Observation } from 'src/observations/entities/observation.entity';
export declare class Location {
    id: ObjectId;
    name: string;
    observations: Observation[];
    location: string;
    createdAt?: Date;
    updatedAt?: Date;
}
