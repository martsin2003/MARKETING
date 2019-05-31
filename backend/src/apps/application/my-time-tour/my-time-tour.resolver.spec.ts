import { Test, TestingModule } from '@nestjs/testing';
import { MyTimeTourResolver } from './my-time-tour.resolver';

describe('MyTimeTourResolver', () => {
  let resolver: MyTimeTourResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyTimeTourResolver]
    }).compile();

    resolver = module.get<MyTimeTourResolver>(MyTimeTourResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
