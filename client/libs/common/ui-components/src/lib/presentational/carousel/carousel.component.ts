import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  ContentChild,
  AfterContentInit,
  AfterViewInit
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'brookfield-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterContentInit, AfterViewInit {
  @Input() quantitySlides: number;
  @Input() fullWidth: boolean;
  @Input() images: string[];

  @ContentChild('insertedContent') insertedContent: ElementRef<HTMLDivElement>;
  @ContentChild('mainImage') mainImage: ElementRef<HTMLImageElement>;

  @ViewChild('carousel') carousel: ElementRef<HTMLDivElement>;
  @ViewChild('container') container: ElementRef<HTMLDivElement>;
  @ViewChild('wrapper') wrapper: ElementRef<HTMLDivElement>;
  @ViewChild('onlyImage') onlyImage: ElementRef<HTMLImageElement>;

  swiping: boolean;
  startedPos = 0;
  duration = '1s';
  endPos = 0;
  mouseup: boolean;
  swipeDirection: 'left' | 'right' = null;
  currentTransform = 0;
  prevDisabled: boolean;
  nextDisabled: boolean;
  selectedSlide = 0;
  slideWidth: number;
  slides: { translate: number }[] | any = [];
  clickOnButton: boolean;

  constructor() {}

  ngOnInit() {
    fromEvent(window, 'resize').subscribe(() => {
      if (this.slides.length) {
        this.initializationCarousel();
      }
    });
    fromEvent(this.wrapper.nativeElement, 'mousedown').subscribe((event: any) => {
      if (!this.clickOnButton) {
        this.duration = '1s';
        this.startedPos = event.clientX;
        this.swiping = true;
        this.mouseup = false;
        if (this.wrapper.nativeElement.style.transform.match(/\d+/)) {
          this.currentTransform = Number(
            this.wrapper.nativeElement.style.transform.match(/\d+/)[0]
          );
        }
      }
    });
    fromEvent(this.wrapper.nativeElement, 'mousemove').subscribe(event => {
      this.swipe(event);
    });
    fromEvent(this.wrapper.nativeElement, 'mouseup').subscribe(event => {
      this.swiping = false;
      if (!this.mouseup) {
        this.mouseup = true;
        this.definedPosition();
      }
    });
    fromEvent(this.wrapper.nativeElement, 'mouseout').subscribe(event => {
      this.swiping = false;
      if (!this.mouseup) {
        this.mouseup = true;
        this.definedPosition();
      }
    });
    fromEvent(this.wrapper.nativeElement, 'touchstart').subscribe((event: any) => {
      if (!this.clickOnButton) {
        this.duration = '0.4s';
        this.startedPos = event.targetTouches[0].clientX;
        this.swiping = true;
        this.mouseup = false;
        if (this.wrapper.nativeElement.style.transform.match(/\d+/)) {
          this.currentTransform = Number(
            this.wrapper.nativeElement.style.transform.match(/\d+/)[0]
          );
        }
      }
    });
    fromEvent(this.wrapper.nativeElement, 'touchmove').subscribe((event: any) => {
      this.swipe(event.targetTouches[0]);
    });
    fromEvent(this.wrapper.nativeElement, 'touchend').subscribe(() => {
      this.swiping = false;
      if (!this.mouseup) {
        this.mouseup = true;
        this.definedPosition();
      }
    });
    fromEvent(this.wrapper.nativeElement, 'touchcancel').subscribe(() => {
      this.swiping = false;
      if (!this.mouseup) {
        this.mouseup = true;
        this.definedPosition();
      }
    });
  }

  ngAfterViewInit() {
    this.setGeneralStyles();
    if (this.images) {
      for (let i = 0; i < this.images.length; i++) {
        this.slides.push({
          translate: 0
        });
      }
      if (this.onlyImage) {
        this.onlyImage.nativeElement.onload = () => {
          this.initializationCarousel();
        };
      }
    }
  }

  ngAfterContentInit() {
    this.setGeneralStyles();
    if (this.insertedContent) {
      for (let i = 0; i < this.quantitySlides; i++) {
        this.slides.push({
          translate: 0
        });
      }
      if (this.mainImage) {
        this.mainImage.nativeElement.onload = () => {
          this.initializationCarousel();
        };
      }
    }
  }

  initializationCarousel() {
    const carouselWidth = this.carousel.nativeElement.clientWidth;
    this.wrapper.nativeElement.style.width = carouselWidth * this.slides.length + 'px';
    this.slideWidth = this.fullWidth ? carouselWidth : carouselWidth - (carouselWidth * 20) / 100;
    let index = 0;
    this.slides.forEach((obj, i, arr) => {
      const slideOffset = this.fullWidth ? index : 10 * index;
      if (i === arr.length - 1) {
        const carouselOffset = this.fullWidth ? 0 : carouselWidth - (carouselWidth * 80) / 100;
        obj.translate = this.slideWidth * index + slideOffset - carouselOffset;
      } else {
        obj.translate = this.slideWidth * index + slideOffset;
        index++;
      }
    });
    this.wrapper.nativeElement.style.transform =
      'translateX(-' + this.slides[this.selectedSlide].translate + 'px)';
    const img: any = this.mainImage || this.onlyImage;
    this.wrapper.nativeElement.childNodes[1].childNodes.forEach((elem: HTMLDivElement) => {
      if (elem.style) {
        elem.style.width = this.slideWidth + 'px';
      }
    });
    this.setDisabled();
    this.wrapper.nativeElement.style.animationDuration = '0s';
    this.wrapper.nativeElement.style.transitionDuration = '0s';
    this.container.nativeElement.style.height = img.nativeElement.clientHeight - 3 + 'px';
    this.wrapper.nativeElement.style.animationTimingFunction = 'easy-in-out';
  }

  swipe(event) {
    if (this.swiping) {
      this.wrapper.nativeElement.style.animationDuration = '0s';
      this.wrapper.nativeElement.style.transitionDuration = '0s';
      this.endPos = this.startedPos - event.clientX;
      this.swipeDirection = event.clientX < this.startedPos ? 'left' : 'right';
      if (
        (this.swipeDirection === 'left' && this.selectedSlide !== this.slides.length - 1) ||
        (this.swipeDirection === 'right' && this.selectedSlide > 0)
      ) {
        this.wrapper.nativeElement.style.transform =
          'translateX(-' + (this.currentTransform + this.endPos) + 'px)';
      }
    }
  }

  setGeneralStyles() {
    const carouselImages: any = this.wrapper.nativeElement.getElementsByTagName('IMG');
    const carouselButtons: any = this.wrapper.nativeElement.getElementsByTagName('BUTTON');
    for (let i = 0; i < carouselImages.length; i++) {
      const img = carouselImages[i];
      img.draggable = false;
    }
    for (let i = 0; i < carouselButtons.length; i++) {
      const button = carouselButtons[i];
      fromEvent(button, 'touchstart').subscribe(() => {
        this.clickOnButton = true;
      });
      fromEvent(button, 'touchend').subscribe(() => {
        this.clickOnButton = false;
      });
      fromEvent(button, 'mousedown').subscribe(() => {
        this.clickOnButton = true;
      });
      fromEvent(button, 'mouseout').subscribe(() => {
        this.clickOnButton = false;
      });
    }
  }

  definedPosition() {
    if (this.swipeDirection === 'left') {
      this.next();
    } else {
      if (this.selectedSlide > 0) {
        this.prev();
      }
    }
  }

  next() {
    this.wrapper.nativeElement.style.animationDuration = this.duration;
    this.wrapper.nativeElement.style.transitionDuration = this.duration;
    if (this.selectedSlide < this.slides.length - 1) {
      this.selectedSlide++;
      this.wrapper.nativeElement.style.transform =
        'translateX(-' + this.slides[this.selectedSlide].translate + 'px)';
    }
    this.setDisabled();
  }

  prev() {
    this.wrapper.nativeElement.style.animationDuration = this.duration;
    this.wrapper.nativeElement.style.transitionDuration = this.duration;
    if (this.selectedSlide > 0) {
      this.selectedSlide--;
      this.wrapper.nativeElement.style.transform =
        'translateX(-' + this.slides[this.selectedSlide].translate + 'px)';
    }
    this.setDisabled();
  }

  setDisabled() {
    if (this.selectedSlide === this.slides.length - 1) {
      this.nextDisabled = true;
    } else {
      this.nextDisabled = false;
    }
    if (this.selectedSlide === 0) {
      this.prevDisabled = true;
    } else {
      this.prevDisabled = false;
    }
  }
}
