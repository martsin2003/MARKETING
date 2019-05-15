import { async, TestBed } from '@angular/core/testing';
import { PortalFeatureHomeModule } from './portal-feature-home.module';

describe('PortalFeatureHomeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PortalFeatureHomeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PortalFeatureHomeModule).toBeDefined();
  });
});
