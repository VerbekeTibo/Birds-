import { ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'

import { typeORMConfig } from './bootstrap/typeORMConfig'
import { graphqlConfig } from './bootstrap/graphQLConfig'
import { BirdsModule } from './birds/birds.module'

@Module({
  imports: [
    // TODO: Enhancement? move to async provider
    TypeOrmModule.forRoot(typeORMConfig),

    GraphQLModule.forRoot<ApolloDriverConfig>(graphqlConfig),

    BirdsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
