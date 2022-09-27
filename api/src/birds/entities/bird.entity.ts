import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Bird {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
