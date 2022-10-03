import { CreateObservationInput } from './create-observation.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'
import { ObjectId } from 'mongodb'

@InputType()
export class UpdateObservationInput extends PartialType(
  CreateObservationInput,
) {
  @Field()
  id: ObjectId
}