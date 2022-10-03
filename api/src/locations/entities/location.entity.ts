import { ObjectType, Field, Int, ID } from '@nestjs/graphql'
import { Observation } from 'src/observations/entities/observation.entity'
import { ObjectId } from 'mongodb'
import {
  Column,
  CreateDateColumn,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm'

@ObjectType()
export class Location {
  @Field(() => ID)
  @ObjectIdColumn()
  id: ObjectId

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  observationsId: string

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