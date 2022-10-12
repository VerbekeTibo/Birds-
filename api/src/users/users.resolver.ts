import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { resolve } from 'path';
import { MessageTypes } from 'src/bootstrap/entities/ClientMessage';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

  @Mutation(() => User, { description: 'Create a user using the DTO.' })
  createUser(@Args('createUserInput') createUserInput: CreateUserInput,): Promise<User> {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => String }) id: string) {
    return new Promise((resolve) =>
      this.usersService.remove(id).then(() => {
        resolve({
          statusCode: 200,
          message: `User with id ${id} was deleted.`,
          type: MessageTypes.success
        })
      })
      .catch(()=> {
        resolve({
          statusCode: 500,
          message: `User with id ${id} could not be deleted.`,
          type: MessageTypes.error
        })
      })
    )
  }
}
