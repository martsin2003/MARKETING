import { async, TestBed } from '@angular/core/testing';
import { PortalFeatureCommunityModule } from './portal-feature-community.module';

describe('PortalFeatureCommunityModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PortalFeatureCommunityModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PortalFeatureCommunityModule).toBeDefined();
  });
});
