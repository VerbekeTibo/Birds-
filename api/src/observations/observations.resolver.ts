import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { ObservationsService } from './observations.service'
import { Observation } from './entities/observation.entity'
import { CreateObservationInput } from './dto/create-observation.input'
import { UpdateObservationInput } from './dto/update-observation.input'
import { BirdsService } from 'src/birds/birds.service'
import { LocationsService } from 'src/locations/locations.service'
import { Bird } from 'src/birds/entities/bird.entity'

@Resolver(() => Observation)
export class ObservationsResolver {
  constructor(
    private readonly observationsService: ObservationsService,
    private readonly birdService: BirdsService,
    private readonly locationService: LocationsService,
  ) {}

  @ResolveField()
  bird(@Parent() o: Observation): Promise<Bird> {
    return this.birdService.findOne(o.birdId)
  }

  @ResolveField()
  location(@Parent() o: Observation): Promise<Location> {
    return this.locationService.findOne(o.locationId)
  }

  @Mutation(() => Observation)
  createObservation(
    @Args('createObservationInput')
    createObservationInput: CreateObservationInput,
  ) {
    return this.observationsService.create(createObservationInput)
  }

  @Query(() => [Observation], { name: 'observations' })
  findAll() {
    return this.observationsService.findAll()
  }

  @Query(() => Observation, { name: 'observation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.observationsService.findOne(id)
  }

  @Mutation(() => Observation)
  updateObservation(
    @Args('updateObservationInput')
    updateObservationInput: UpdateObservationInput,
  ) {
    return this.observationsService.update(
      updateObservationInput.id,
      updateObservationInput,
    )
  }

  @Mutation(() => Observation)
  removeObservation(@Args('id', { type: () => Int }) id: number) {
    return this.observationsService.remove(id)
  }
}