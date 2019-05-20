import { TestBed } from '@angular/core/testing';

import { SiteplansService } from './siteplans.service';

describe('SiteplansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiteplansService = TestBed.get(SiteplansService);
    expect(service).toBeTruthy();
  });
});
