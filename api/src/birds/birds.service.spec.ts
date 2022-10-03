import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { ObjectId } from 'mongodb'
import { Repository } from 'typeorm'
import { BirdsService } from './birds.service'
import { Bird } from './entities/bird.entity'
import { createBird, createBirdInputStub } from './providers/stubs/bird.stub'

describe('BirdsService', () => {
  let service: BirdsService
  let mockBirdRepository: Repository<Bird>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BirdsService,
        {
          provide: getRepositoryToken(Bird),
          useValue: {
            save: jest.fn().mockResolvedValue(createBird()),
            find: jest.fn().mockResolvedValue([createBird()]),
            findOne: jest.fn().mockResolvedValue(createBird()),
          },
        },
      ],
    }).compile()

    service = module.get<BirdsService>(BirdsService)
    mockBirdRepository = module.get<Repository<Bird>>(getRepositoryToken(Bird))
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('create', () => {
    describe('when create is called', () => {
      it('should call the repository save method', async () => {
        const saveSpy = jest.spyOn(mockBirdRepository, 'save')
        const newBird = new Bird()
        await service.create(newBird)
        expect(saveSpy).toBeCalledTimes(1)
      })

      it('should be called with the correct params', async () => {
        const saveSpy = jest.spyOn(mockBirdRepository, 'save')
        //const newBird = new Bird()
        const newBird = createBirdInputStub() //<- function that creates a CreateInputBird object
        await service.create(newBird)
        expect(saveSpy).toBeCalledWith(newBird)
      })

      it('should return the created bird', async () => {
        const newBird = createBirdInputStub()
        const toReturndBird = createBird()

        const result = await service.create(newBird)
        expect(result).toEqual(toReturndBird)
      })

    })
  })
  describe('findOne', () => {
    describe('when findOne is called', () => {
      it('should call the repository find method', async () => {
        const findSpy = jest.spyOn(mockBirdRepository, 'findOne')
        await service.findOne('633ad69e196de0561cb0347d')
        expect(findSpy).toBeCalledTimes(1)
      })

      it('should be called with the correct params', async () => {
        const findSpy = jest.spyOn(mockBirdRepository, 'findOne')
        await service.findOne('633ad69e196de0561cb0347d')
        expect(findSpy).toBeCalledWith(new ObjectId('633ad69e196de0561cb0347d'))
      })

      it('should return the found bird', async () => {
        const toReturndBird = createBird()
        const result = await service.findOne('633ad69e196de0561cb0347d')
        expect(result).toEqual(toReturndBird)
      })
    })
  })
  describe('update', () => {

    describe('when update is called', () => {
      it('should call the repository save method', async () => {
        const saveSpy = jest.spyOn(mockBirdRepository, 'save')
        const newBird = createBird()
        await service.update(newBird)
        expect(saveSpy).toBeCalledTimes(1)
      })

      it('should be called with the correct params', async () => {
        const saveSpy = jest.spyOn(mockBirdRepository, 'save')
        const newBird = createBird()
        await service.update(newBird)
        expect(saveSpy).toBeCalledWith(newBird)
      })

      it('should return the updated bird', async () => {
        const newBird = createBird()
        const toReturndBird = createBird()
        const result = await service.update(newBird)
        expect(result).toEqual(toReturndBird)
      })
    })
  })
  // describe('remove', () => {
  //   it('should call the repository delete method', async () => {
  //     const deleteSpy = jest.spyOn(mockBirdRepository, 'delete')
  //     await service.remove('633ad69e196de0561cb0347d')
  //     expect(deleteSpy).toBeCalledTimes(1)
  //   })
  // })
})