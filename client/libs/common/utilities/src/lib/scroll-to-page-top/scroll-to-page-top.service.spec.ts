import { TestBed } from '@angular/core/testing';

import { ScrollToPageTopService } from './scroll-to-page-top.service';

describe('ScrollToPageTopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrollToPageTopService = TestBed.get(ScrollToPageTopService);
    expect(service).toBeTruthy();
  });
});
