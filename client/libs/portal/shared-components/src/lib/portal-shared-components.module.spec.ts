import { async, TestBed } from '@angular/core/testing';
import { PortalSharedComponentsModule } from './portal-shared-components.module';

describe('PortalSharedComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PortalSharedComponentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PortalSharedComponentsModule).toBeDefined();
  });
});
