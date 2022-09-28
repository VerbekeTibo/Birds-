import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb';

import { DeleteResult, Repository } from 'typeorm';
import { runInThisContext } from 'vm';
import { CreateBirdInput } from './dto/create-bird.input';
import { UpdateBirdInput } from './dto/update-bird.input';
import { Bird } from './entities/bird.entity';

@Injectable()
export class BirdsService {
  constructor(
    @InjectRepository(Bird)
    private birdRepository: Repository<Bird>,
  ) { }
  create(createBirdInput: CreateBirdInput): Promise<Bird> {
    const b = new Bird()
    b.name = createBirdInput.name
    b.fullname = createBirdInput.fullname
    b.category = createBirdInput.category
    b.description = createBirdInput.description
    b.url = createBirdInput.url
    b.observations = createBirdInput.observations
    return this.birdRepository.save(createBirdInput)
  }

  findAll(): Promise<Bird[]> {
    console.log(`This action returns all birds`);
    return this.birdRepository.find()
  }

  findOne(id: String): Promise<Bird> {
    console.log(`This action returns a #${id} bird`);
    const parsedId = new Object(id);
    // @ts-ignore
    return this.birdsRepository.findOneBy({ _id: new ObjectId(id)  });
    }

  update(updateBirdInput: UpdateBirdInput) {
    const update = new Bird()
    update.id = new ObjectId(updateBirdInput.id)
    update.name = updateBirdInput.name
    update.fullname = updateBirdInput.fullname
    update.category = updateBirdInput.category
    update.url = updateBirdInput.url
    update.observations = updateBirdInput.observations
    update.description = updateBirdInput.description
    return this.birdRepository.save(update)

  }

  remove(id: string): Promise<DeleteResult> {
    //@ts-ignore
    return this.birdRepository.delete({ _id: new ObjectId(id) });
  }
}
