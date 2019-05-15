import { async, TestBed } from '@angular/core/testing';
import { PortalSharedFeatureFooterModule } from './portal-shared-feature-footer.module';

describe('PortalSharedFeatureFooterModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PortalSharedFeatureFooterModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PortalSharedFeatureFooterModule).toBeDefined();
  });
});
