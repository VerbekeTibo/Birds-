import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BirdsService } from './birds.service';
import { CreateBirdInput } from './dto/create-bird.input';
import { Bird } from './entities/bird.entity';
import { createBirdInputStub,createBird } from './providers/stubs/bird.stub';

describe('BirdsService', () => {
  let service: BirdsService
  let mockBirdsRepository: Repository<Bird>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BirdsService, {
        provide: getRepositoryToken(Bird),
        useValue: {
          save: jest.fn().mockResolvedValue(createBird()),
        }

      }],
    }).compile();

    service = module.get<BirdsService>(BirdsService);
    mockBirdsRepository = module.get<Repository<Bird>>(getRepositoryToken(Bird))
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  })
  describe('create', () => {
    describe('when create is called', () => {
      it('should call the repository save method', async () => {
        const bird = new Bird()
        const saveSpy = jest.spyOn(mockBirdsRepository, 'save')

        await service.create(bird)
        expect(saveSpy).toHaveBeenCalledTimes(1)
      })
    })
  })
  it('should call birdRepository with the correct params', async () => {
    const saveSpy = jest.spyOn(mockBirdsRepository, 'save')
    const bird: CreateBirdInput = createBirdInputStub()

    await service.create(bird)
    expect(saveSpy).toBeCalledWith(bird)
  })

});


