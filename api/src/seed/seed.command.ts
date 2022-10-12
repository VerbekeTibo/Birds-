import { Command } from 'nestjs-command'
import { Injectable } from '@nestjs/common'
import { DatabaseSeedService } from './seed.service'

@Injectable()
export class DatabaseSeedCommand {
  constructor(private readonly seedService: DatabaseSeedService) { }

  @Command({
    command: 'seed:birds',
    describe: 'seed the database',
  })
  async seed() {
    console.log('🌱 Start seeding')
    const r = await this.seedService.addAllBirds()
    console.log(r)
    console.log('🌱 Seeding done 🏁')
  }

  @Command({
    command: 'seed:reset',
    describe: 'delete all data from the database',
  })


  async delete() {
    console.log('🌱 Start deleting')
    await this.seedService.deleteAllBirds()
    console.log('🌱 Deleting done 🏁')
  }

  @Command({
    command: 'seed:locations',
    describe: 'seed the database with locations',
  })

  async seedLocations() {
    try {
      const r = await this.seedService.addAllLocations()
      console.log(`Added the database with a couple of locations`)
    } catch (error) {
      console.warn(`Error adding locations to the database`)
    }

  }
  @Command({
    command: 'seed:observations',
    describe: 'seed the database with observations',
  })

  async seedObservations() {
    
      const r = await this.seedService.addAllObservations()
      console.log(`Added the database with a couple of observations`)
    

  }
}