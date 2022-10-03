import { InputType, Field } from '@nestjs/graphql'
import { Observation } from 'src/observations/entities/observation.entity'

@InputType()
export class CreateLocationInput {
  @Field()
  name: string

  @Field()
  observations: Observation[]

  @Field()
  location: string
}
