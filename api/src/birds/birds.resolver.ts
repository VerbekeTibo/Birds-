import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'

import { Bird } from './entities/bird.entity'
import { BirdsService } from './birds.service'
import { CreateBirdInput } from './dto/create-bird.input'
import { UpdateBirdInput } from './dto/update-bird.input'
import { DeleteResult } from 'typeorm'

@Resolver(() => Bird)
export class BirdsResolver {
  constructor(private readonly birdsService: BirdsService) {}

  @Mutation(() => Bird, { description: 'Create a bird using the DTO.' })
  createBird(
    @Args('createBirdInput') createBirdInput: CreateBirdInput,
  ): Promise<Bird> {
    return this.birdsService.create(createBirdInput)
  }

  @Query(() => [Bird], { name: 'birds' })
  findAll(): Promise<Bird[]> {
    return this.birdsService.findAll()
  }

  @Query(() => Bird, { name: 'bird' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Bird> {
    return this.birdsService.findOne(id)
  }

  @Mutation(() => Bird)
  updateBird(
    @Args('updateBirdInput') updateBirdInput: UpdateBirdInput,
  ): Promise<Bird> {
    return this.birdsService.update(updateBirdInput)
  }

  // TODO: make better.
  @Mutation(() => Bird)
  removeBird(@Args('id', { type: () => String }) id: string): Promise<void> {
    this.birdsService.remove(id)
    return null
  }
}
