import { TestBed } from '@angular/core/testing';

import { CommunityPlansService } from './community-plans.service';

describe('CommunityPlansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommunityPlansService = TestBed.get(CommunityPlansService);
    expect(service).toBeTruthy();
  });
});
