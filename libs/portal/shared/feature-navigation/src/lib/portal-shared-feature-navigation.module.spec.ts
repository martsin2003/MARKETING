import { async, TestBed } from '@angular/core/testing';
import { PortalSharedFeatureNavigationModule } from './portal-shared-feature-navigation.module';

describe('PortalSharedFeatureNavigationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PortalSharedFeatureNavigationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PortalSharedFeatureNavigationModule).toBeDefined();
  });
});
