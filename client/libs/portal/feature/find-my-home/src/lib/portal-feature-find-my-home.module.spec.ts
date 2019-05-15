import { async, TestBed } from '@angular/core/testing';
import { PortalFeatureFindMyHomeModule } from './portal-feature-find-my-home.module';

describe('PortalFeatureFindMyHomeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PortalFeatureFindMyHomeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PortalFeatureFindMyHomeModule).toBeDefined();
  });
});
