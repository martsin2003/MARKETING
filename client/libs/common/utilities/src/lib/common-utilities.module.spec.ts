import { async, TestBed } from '@angular/core/testing';
import { CommonUtilitiesModule } from './common-utilities.module';

describe('CommonUtilitiesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUtilitiesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUtilitiesModule).toBeDefined();
  });
});
