import { ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { graphqlConfig } from './bootstrap/graphQLConfig'

import { typeORMConfig } from './bootstrap/typeORMConfig'

// TODO: bird module for GraphQL

@Module({
  imports: [
    // TODO: Enhancement? move to async provider
    TypeOrmModule.forRoot(typeORMConfig),

    GraphQLModule.forRoot<ApolloDriverConfig>(graphqlConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
