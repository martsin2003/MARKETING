import { async, TestBed } from '@angular/core/testing';
import { PortalSharedViewFilterModule } from './portal-shared-view-filter.module';

describe('PortalSharedViewFilterModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PortalSharedViewFilterModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PortalSharedViewFilterModule).toBeDefined();
  });
});
