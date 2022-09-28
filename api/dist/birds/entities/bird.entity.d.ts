import { ObjectId } from 'mongodb';
export declare class Bird {
    id: ObjectId;
    name: string;
    fullname: string;
    category: string;
    url: string;
    observations: number;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
