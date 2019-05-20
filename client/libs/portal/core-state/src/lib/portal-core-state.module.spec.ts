import { async, TestBed } from '@angular/core/testing';
import { PortalCoreStateModule } from './portal-core-state.module';

describe('PortalCoreStateModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PortalCoreStateModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PortalCoreStateModule).toBeDefined();
  });
});
