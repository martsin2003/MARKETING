import { async, TestBed } from '@angular/core/testing';
import { PortalFeatureHomeDesignDetailModule } from './portal-feature-home-design-detail.module';

describe('PortalFeatureHomeDesignDetailModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PortalFeatureHomeDesignDetailModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PortalFeatureHomeDesignDetailModule).toBeDefined();
  });
});
