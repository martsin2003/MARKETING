import { async, TestBed } from '@angular/core/testing';
import { PortalSharedFeatureEmpoweredSliderModule } from './portal-shared-feature-empowered-slider.module';

describe('PortalSharedFeatureEmpoweredSliderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PortalSharedFeatureEmpoweredSliderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PortalSharedFeatureEmpoweredSliderModule).toBeDefined();
  });
});
