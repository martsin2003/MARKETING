import { async, TestBed } from '@angular/core/testing';
import { PortalFeatureMyTimeTourModule } from './portal-feature-my-time-tour.module';

describe('PortalFeatureMyTimeTourModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PortalFeatureMyTimeTourModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PortalFeatureMyTimeTourModule).toBeDefined();
  });
});
