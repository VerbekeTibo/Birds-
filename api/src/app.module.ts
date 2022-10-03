import { Module } from '@nestjs/common'

import { BirdsModule } from './birds/birds.module'
import { ObservationsModule } from './observations/observations.module'
import { LocationsModule } from './locations/locations.module'
import { BootstrapModule } from './bootstrap/bootstrap.module'
import { DatabaseSeedModule } from './seed/seed.module'

@Module({
  imports: [
    BootstrapModule,
    BirdsModule,
    ObservationsModule,
    LocationsModule,
    DatabaseSeedModule,
  ],

  exports: [],
})
export class AppModule {}
