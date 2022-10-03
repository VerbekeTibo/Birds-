import { Test, TestingModule } from '@nestjs/testing';
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
            remove: jest.fn()
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
  beforeEach(async () => {
    let createBirdDTO = createBirdInputStub()
    let resultBird = await resolver.createBird(createBirdDTO)
  })
  describe('createBird', () => {

    describe('when createBird is called', () => {
      it('should call the service create method', async () => {
        let createBirdDTO: CreateBirdInput
        let resultBird: Bird
        createBirdDTO = {
          name: 'bird1',
          description: 'bird1 description',
          fullname: 'bird1 fullname',
          url: 'http://bird1.com',
          category: 'bird1 category',
          observations: 2
        }
        resultBird = await resolver.createBird(createBirdDTO)
        expect(service.create).toBeCalledTimes(1)
      })
    })

    it('should return the created bird', async () => {
      let createBirdDTO: CreateBirdInput
      let resultBird: Bird
      createBirdDTO = {
        name: 'bird1',
        description: 'bird1 description',
        fullname: 'bird1 fullname',
        url: 'http://bird1.com',
        category: 'bird1 category',
        observations: 2
      }
      resultBird = await resolver.createBird(createBirdDTO)
      expect(resultBird).toEqual({
        name: 'bird1',
        description: 'bird1 description',
        fullname: 'bird1 fullname',
        url: 'http://bird1.com',
        category: 'bird1 category',
        observations: 2
      })
    });
  });
});
