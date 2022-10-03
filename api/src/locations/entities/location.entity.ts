import { ObjectType, Field, Int, ID } from '@nestjs/graphql'
import { Observation } from 'src/observations/entities/observation.entity'
import {
  Column,
  CreateDateColumn,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm'

@ObjectType()
export class Location {
  @Field(() => ID)
  @ObjectIdColumn()
  id: ObjectID

  @Field()
  @Column()
  name: string

  @Field(() => [Observation])
  @Column({ nullable: true })
  observations: Observation[]

  @Field()
  @Column()
  location: string

  @Field({ nullable: true })
  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date
}
