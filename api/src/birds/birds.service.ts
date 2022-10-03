import { Injectable } from '@nestjs/common'
import { DeleteResult, Repository } from 'typeorm'
import { ObjectId } from 'mongodb'

import { CreateBirdInput } from './dto/create-bird.input'
import { UpdateBirdInput } from './dto/update-bird.input'
import { Bird } from './entities/bird.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class BirdsService {
  constructor(
    @InjectRepository(Bird)
    private readonly birdRepository: Repository<Bird>,
  ) {}

  create(createBirdInput: CreateBirdInput): Promise<Bird> {
    const b = new Bird()
    b.name = createBirdInput.name
    b.fullname = createBirdInput.fullname
    b.category = createBirdInput.category
    b.url = createBirdInput.url
    b.observations = createBirdInput.observations
    b.description = createBirdInput.description
    return this.birdRepository.save(b)
  }

  findAll(): Promise<Bird[]> {
    return this.birdRepository.find()
  }

  findOne(id: string): Promise<Bird> {
    //@ts-ignore
    return this.birdRepository.findOne(new ObjectId(id))
  }

  update(updateBirdInput: UpdateBirdInput) {
    const update = new Bird()
    update.id = updateBirdInput.id
    update.name = updateBirdInput.name
    update.fullname = updateBirdInput.fullname
    update.category = updateBirdInput.category
    update.url = updateBirdInput.url
    update.observations = updateBirdInput.observations
    update.description = updateBirdInput.description
    return this.birdRepository.save(update) // Save gives us an advantage!
  }

  remove(id: string): Promise<DeleteResult> {
    //@ts-ignore
    return this.birdRepository.delete(new ObjectId(id))
  }
}