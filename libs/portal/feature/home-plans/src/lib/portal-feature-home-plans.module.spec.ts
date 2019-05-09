import { async, TestBed } from '@angular/core/testing';
import { PortalFeatureHomePlansModule } from './portal-feature-home-plans.module';

describe('PortalFeatureHomePlansModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PortalFeatureHomePlansModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PortalFeatureHomePlansModule).toBeDefined();
  });
});
