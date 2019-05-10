import { async, TestBed } from '@angular/core/testing';
import { CommonUiComponentsImageCarouselModule } from './common-ui-components-image-carousel.module';

describe('CommonUiComponentsImageCarouselModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiComponentsImageCarouselModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiComponentsImageCarouselModule).toBeDefined();
  });
});
