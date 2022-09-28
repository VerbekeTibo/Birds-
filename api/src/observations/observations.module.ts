import { Module } from '@nestjs/common';
import { ObservationsService } from './observations.service';
import { ObservationsResolver } from './observations.resolver';
import { BirdsModule } from 'src/birds/birds.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bird } from 'src/birds/entities/bird.entity';
import { BirdsService } from 'src/birds/birds.service';

@Module({
  imports:[BirdsModule, TypeOrmModule.forFeature([Bird])],
  providers: [ObservationsResolver, ObservationsService, BirdsService]
})
export class ObservationsModule {}
