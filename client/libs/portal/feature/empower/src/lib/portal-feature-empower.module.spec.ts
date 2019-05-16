import { async, TestBed } from '@angular/core/testing';
import { PortalFeatureEmpowerModule } from './portal-feature-empower.module';

describe('PortalFeatureEmpowerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PortalFeatureEmpowerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PortalFeatureEmpowerModule).toBeDefined();
  });
});
