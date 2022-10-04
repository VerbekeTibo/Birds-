import { Test, TestingModule } from '@nestjs/testing';
import { ObjectId } from 'mongodb';
import { ClientMessage, MessageTypes } from '../bootstrap/entities/ClientMessages';
import { BirdsResolver } from './birds.resolver';
import { BirdsService } from './birds.service';
import { CreateBirdInput } from './dto/create-bird.input';
import { Bird } from './entities/bird.entity';
import { createBird, createBirdInputStub } from './providers/stubs/bird.stub'


describe('BirdsResolver', () => {
  let resolver: BirdsResolver;
  let service: BirdsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BirdsResolver,
        // BirdsService,
        {
          provide: BirdsService,
          useValue: {
            create: jest.fn().mockResolvedValue(createBird()),
            findAll: jest.fn().mockResolvedValue([createBird()]),
            findOne: jest.fn().mockResolvedValue(createBird()),
            update: jest.fn().mockResolvedValue(createBird()),
            remove: jest.fn().mockResolvedValue({ affected: 1 }),
          }
        }
      ],
    }).compile();

    resolver = module.get<BirdsResolver>(BirdsResolver);
    service = module.get<BirdsService>(BirdsService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('createBird', () => {
    let createBirdDTO: CreateBirdInput;
    let resultBird: Bird
    beforeEach(async () => {
      createBirdDTO = {
        name: 'bird1',
        description: 'bird1 description',
        fullname: 'bird1 fullname',
        url: 'bird1 url',
        observations: 2,
        category: 'bird1 category',
      }
      resultBird = await resolver.createBird(createBirdDTO)
    })
    describe('when createBird is called', () => {
      it('should call the service create method', async () => {

        expect(service.create).toBeCalledTimes(1)
      })
    })

    it('should return the created bird', async () => {


      expect(resultBird).toEqual(createBird())
    });
  });
  describe('findAll', () => {
    let resultBirds: Bird[]
    beforeEach(async () => {
      resultBirds = await resolver.findAll()
    })
    describe('when findAll is called', () => {
      it('should call the service findAll method', async () => {

        expect(service.findAll).toBeCalledTimes(1)
      })
    })

    it('should return the created bird', async () => {
      expect(resultBirds).toEqual([createBird()])
    })
  })
  describe('findOne', () => {
    let resultBird: Bird
    beforeEach(async () => {
      resultBird = await resolver.findOne(createBird().id)
    })
    describe('when findOne is called', () => {
      it('should call the service findOne method', async () => {

        expect(service.findOne).toBeCalledTimes(1)
      })
      it('should call the service findOne method with the correct id', async () => {

        expect(service.findOne).toBeCalledWith(createBird().id)
      })

      it('should return the created bird', async () => {
        expect(resultBird).toEqual(createBird())
      })
    })
  })
  describe('update', () => {
    let resultBird: Bird
    beforeEach(async () => {
      resultBird = await resolver.updateBird(createBird())
    })
    describe('when update is called', () => {
      it('should call the service update method', async () => {

        expect(service.update).toBeCalledTimes(1)
      })
      it('should call the service update method with the correct id', async () => {

        expect(service.update).toBeCalledWith(createBird())
      })

      it('should return the created bird', async () => {
        expect(resultBird).toEqual(createBird())
      })
    })
  })

  describe('removeBird', () => {
    let result: any
    beforeEach(async () => {
      result = await resolver.removeBird(createBird().id)
    })
    describe('when remove is called', () => {
      it('should call the service remove method', async () => {

        expect(service.remove).toBeCalledTimes(1)
      })
      it('should call the service remove method with the correct id', async () => {

        expect(service.remove).toBeCalledWith(new ObjectId(createBird().id))
      })

      it('should return the correct messages', async () => {
        jest
          .spyOn(service, 'remove')
          .mockResolvedValue({ affected: 1, raw: '' })
        result = await resolver.removeBird(createBird().id)
        expect(result).toEqual({ type: MessageTypes.success, message: 'Bird deleted', statusCode: 200 })
      })
      it('should return the correct error messages', async () => {
        jest
          .spyOn(service, 'remove')
          .mockResolvedValue({ affected: 10, raw: '' })
        result = await resolver.removeBird(createBird().id)
        const expectResult: ClientMessage = {
          type: MessageTypes.error,
          message: 'Delete action went very wrong.',
          statusCode: 400
        }
        expect(result).toEqual(expectResult)
      })
    })
  })
});