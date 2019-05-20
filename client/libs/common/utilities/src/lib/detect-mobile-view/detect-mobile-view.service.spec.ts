import { TestBed } from '@angular/core/testing';

import { DetectMobileViewService } from './detect-mobile-view.service';

describe('DetectMobileViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetectMobileViewService = TestBed.get(DetectMobileViewService);
    expect(service).toBeTruthy();
  });
});
