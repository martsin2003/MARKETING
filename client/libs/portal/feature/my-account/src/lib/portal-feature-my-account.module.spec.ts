import { async, TestBed } from '@angular/core/testing';
import { PortalFeatureMyAccountModule } from './portal-feature-my-account.module';

describe('PortalFeatureMyAccountModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PortalFeatureMyAccountModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PortalFeatureMyAccountModule).toBeDefined();
  });
});
