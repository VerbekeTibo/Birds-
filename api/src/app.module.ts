import { ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { graphqlConfig } from './bootstrap/graphQLConfig'

import { typeORMConfig } from './bootstrap/typeORMConfig'
import { BirdsModule } from './birds/birds.module'
import { LocationsModule } from './locations/locations.module';
import { ObservationsModule } from './observations/observations.module';

// TODO: bird module for GraphQL

@Module({
  imports: [
    // TODO: Enhancement? move to async provider
    TypeOrmModule.forRoot(typeORMConfig),

    GraphQLModule.forRoot<ApolloDriverConfig>(graphqlConfig),
    BirdsModule,
    LocationsModule,
    ObservationsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }