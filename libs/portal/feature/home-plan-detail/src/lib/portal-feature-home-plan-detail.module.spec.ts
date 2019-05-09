import { async, TestBed } from '@angular/core/testing';
import { PortalFeatureHomePlanDetailModule } from './portal-feature-home-plan-detail.module';

describe('PortalFeatureHomePlanDetailModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PortalFeatureHomePlanDetailModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PortalFeatureHomePlanDetailModule).toBeDefined();
  });
});
