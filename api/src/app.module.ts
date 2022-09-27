import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './bootstrap/typeOrmConfig';
import { BirdsModule } from './birds/birds.module';

//TODO: bird module


@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BirdsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
