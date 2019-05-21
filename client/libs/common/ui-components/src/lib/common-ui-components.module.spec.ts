import { async, TestBed } from '@angular/core/testing';
import { CommonUiComponentsModule } from './common-ui-components.module';

describe('CommonUiComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiComponentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiComponentsModule).toBeDefined();
  });
});
