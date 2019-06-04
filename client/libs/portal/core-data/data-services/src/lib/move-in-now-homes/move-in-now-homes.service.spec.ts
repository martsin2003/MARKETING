import { TestBed } from '@angular/core/testing';

import { MoveInNowHomesService } from './move-in-now-homes.service';

describe('MoveInNowHomesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoveInNowHomesService = TestBed.get(MoveInNowHomesService);
    expect(service).toBeTruthy();
  });
});
