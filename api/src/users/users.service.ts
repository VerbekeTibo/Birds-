import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(createUserInput: CreateUserInput):Promise<User> {
    
    return this.userRepository.save(createUserInput);
  }


  //TODO: Everyone can get all users. This is not good.
  findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  findOne(id: string): Promise<User> {
    //@ts-ignore
    return this.userRepository.findOne(new ObjectId(id))
  }

  findOneByUid(uid: string) {
    return this.userRepository.findOneBy({uid});
  }
    

  update( updateUserInput: UpdateUserInput) {
      const update= new User();
      update.id = new ObjectId(updateUserInput.id);
      update.uid = updateUserInput.uid;
      update.observations = updateUserInput.observations;
      update.observationCount = updateUserInput.observationCount;

    return this.userRepository.save(update);
  }

  remove(id: string): Promise<DeleteResult> {
    //@ts-ignore
    return this.userRepository.delete(new ObjectId(id));
  }
}
