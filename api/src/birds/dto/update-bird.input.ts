import { CreateBirdInput } from './create-bird.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { ObjectId } from 'mongodb';

@InputType()
export class UpdateBirdInput extends PartialType(CreateBirdInput) {
  @Field() // GraphQL
  id: ObjectId;
  }