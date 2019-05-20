import { async, TestBed } from '@angular/core/testing';
import { PortalFeatureCommunitiesModule } from './portal-feature-communities.module';

describe('PortalFeatureCommunitiesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PortalFeatureCommunitiesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PortalFeatureCommunitiesModule).toBeDefined();
  });
});
