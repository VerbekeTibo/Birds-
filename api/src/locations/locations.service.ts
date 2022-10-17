import { Injectable } from '@nestjs/common'
import { CreateLocationInput } from './dto/create-location.input'
import { UpdateLocationInput } from './dto/update-location.input'
import { Location } from './entities/location.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { DeleteResult, Repository } from 'typeorm'
import { ObjectId } from 'mongodb'
import { Observation } from 'src/observations/entities/observation.entity'

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  create(createLocationInput: CreateLocationInput): Promise<Location> {
    const l = new Location()
    l.name = createLocationInput.name
    // l.observationsId = createLocationInput.observationsId
    // l.location = createLocationInput.location
    l.area = createLocationInput.area
    return this.locationRepository.save(l)
  }

  findAll(): Promise<Location[]> {
    return this.locationRepository.find()
  }

  findOne(id: string): Promise<Location> {
    //@ts-ignore
    return this.locationRepository.findOne(new ObjectId(id))
  }

  update(updateLocationInput: UpdateLocationInput) {
    const update = new Location()
    update.id = new ObjectId(updateLocationInput.id)
    update.name = updateLocationInput.name
    // update.observationsId = updateLocationInput.observationsId
    // update.location = updateLocationInput.location
    update.area = updateLocationInput.area
    return this.locationRepository.save(update)
  }

  remove(id: string): Promise<DeleteResult> {
    //@ts-ignore
    return this.locationRepository.delete(new ObjectId(id))
  }

  async incrementLocation(id: string, observations: Observation[]) {
    //@ts-ignore
    const l: Location = await this.findOne(new ObjectId(id))

    l.observations = l.observations
      ? [...observations, ...l.observations] // merge the current observations with the new ones
      : [...observations]

    return this.locationRepository.save(l)
  }
}