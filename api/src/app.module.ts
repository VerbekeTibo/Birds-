import { ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'

import { typeORMConfig } from './bootstrap/typeORMConfig'
import { graphqlConfig } from './bootstrap/graphQLConfig'
import { BirdsModule } from './birds/birds.module'
import { ObservationsModule } from './observations/observations.module';
import { LocationsModule } from './locations/locations.module';

// TODO: birds-module afwerken
// TODO: module voor locations
// TODO: module voor observations
// TODO: module voor users (minder belangrijk nu)

@Module({
  imports: [
    // TODO: Enhancement? move to async provider
    TypeOrmModule.forRoot(typeORMConfig),

    GraphQLModule.forRoot<ApolloDriverConfig>(graphqlConfig),

    BirdsModule,

    ObservationsModule,

    LocationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
