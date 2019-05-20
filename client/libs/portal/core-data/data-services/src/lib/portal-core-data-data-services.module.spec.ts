import { async, TestBed } from '@angular/core/testing';
import { PortalCoreDataDataServicesModule } from './portal-core-data-data-services.module';

describe('PortalCoreDataDataServicesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PortalCoreDataDataServicesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PortalCoreDataDataServicesModule).toBeDefined();
  });
});
