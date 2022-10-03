import { CreateObservationInput } from './create-observation.input';
import { ObjectId } from 'mongodb';
declare const UpdateObservationInput_base: import("@nestjs/common").Type<Partial<CreateObservationInput>>;
export declare class UpdateObservationInput extends UpdateObservationInput_base {
    id: ObjectId;
}
export {};
