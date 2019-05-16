import { async, TestBed } from '@angular/core/testing';
import { PortalFeatureResourcesModule } from './portal-feature-resources.module';

describe('PortalFeatureResourcesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PortalFeatureResourcesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PortalFeatureResourcesModule).toBeDefined();
  });
});
