import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './bootstrap/typeOrmConfig';
import { BirdsModule } from './birds/birds.module';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { graphqlConfig } from './bootstrap/graphqlConfig';
import { GraphQLModule } from '@nestjs/graphql';

//TODO: bird module


@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), 
  GraphQLModule.forRoot<ApolloDriverConfig>(graphqlConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
