import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BirdsService } from './birds.service';
import { Bird } from './entities/bird.entity';
import { CreateBirdInput } from './dto/create-bird.input';
import { UpdateBirdInput } from './dto/update-bird.input';
import { ClientMessage, MessageTypes } from 'src/entities/ClientMessages';

@Resolver(() => Bird)
export class BirdsResolver {
  constructor(private readonly birdsService: BirdsService) { }

  @Mutation(() => Bird, { description: 'Create a bird' })
  createBird(@Args('createBirdInput') createBirdInput: CreateBirdInput): Promise<Bird> {
    return this.birdsService.create(createBirdInput);
  }

  @Query(() => [Bird], { name: 'birds' })
  findAll(): Promise<Bird[]> {
    return this.birdsService.findAll();
  }

  @Query(() => Bird, { name: 'bird' })
  findOne(@Args('id', { type: () => Int }) id: string): Promise<Bird> {
    return this.birdsService.findOne(id);
  }

  @Mutation(() => Bird)
  updateBird(@Args('updateBirdInput') updateBirdInput: UpdateBirdInput): Promise<Bird> {
    return this.birdsService.update(updateBirdInput);
  }

  @Mutation(() => ClientMessage)
  async removeBird(@Args('id', { type: () => String }) id: string): Promise<ClientMessage> {
    const deleted = await this.birdsService.remove(id)
    if (deleted.affected <= 1)
      return { type: MessageTypes.success, message: 'Bird deleted', statusCode: 200 }
     return { type: MessageTypes.error, message: 'Delete action went wrong', statusCode: 400 } 

  }
}
