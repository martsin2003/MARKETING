import { Test, TestingModule } from '@nestjs/testing';
import { MyTimeTourService } from './my-time-tour.service';

describe('MyTimeTourService', () => {
  let service: MyTimeTourService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyTimeTourService],
    }).compile();

    service = module.get<MyTimeTourService>(MyTimeTourService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
