import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'brookfield-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnChanges {
  @Input() someImages: string[];

  @ViewChild('carousel') carousel: ElementRef<HTMLDivElement>;
  @ViewChild('container') container: ElementRef<HTMLDivElement>;
  @ViewChild('wrapper') wrapper: ElementRef<HTMLDivElement>;

  swiping: boolean;
  startedPos = 0;
  duration: string = '1s';
  endPos = 0;
  mouseup: boolean;
  swipeDirection: 'left' | 'right' = null;
  currentTransform = 0;
  prevDisabled: boolean;
  nextDisabled: boolean;
  selectedImage = 0;
  imageWidth: number;
  images: { path: string; translate: number }[] | any = [];

  constructor() {}

  ngOnInit() {
    fromEvent(window, 'resize').subscribe(() => {
      this.initializationCarousel();
    });
    fromEvent(this.wrapper.nativeElement, 'mousedown').subscribe((event: any) => {
      this.duration = '1s';
      this.startedPos = event.clientX;
      this.swiping = true;
      this.mouseup = false;
      if (this.wrapper.nativeElement.style.transform.match(/\d+/)) {
        this.currentTransform = Number(this.wrapper.nativeElement.style.transform.match(/\d+/)[0]);
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
      this.duration = '0.4s';
      this.startedPos = event.targetTouches[0].clientX;
      this.swiping = true;
      this.mouseup = false;
      if (this.wrapper.nativeElement.style.transform.match(/\d+/)) {
        this.currentTransform = Number(this.wrapper.nativeElement.style.transform.match(/\d+/)[0]);
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes.someImages && changes.someImages.currentValue) {
      this.images = this.someImages.map(imgPath => {
        return {
          path: imgPath,
          translate: 0
        };
      });
      setTimeout(() => this.initializationCarousel(), 1000);
    }
  }

  initializationCarousel() {
    const carouselWidth = this.carousel.nativeElement.clientWidth;
    this.wrapper.nativeElement.style.width = carouselWidth * this.images.length + 'px';
    this.imageWidth = carouselWidth - (carouselWidth * 20) / 100;
    let index = 0;
    this.images.forEach((obj, i, arr) => {
      if (i === arr.length - 1) {
        obj.translate =
          this.imageWidth * index + 10 * index - (carouselWidth - (carouselWidth * 80) / 100);
      } else {
        obj.translate = this.imageWidth * index + 10 * index;
        index++;
      }
    });
    let img: any = this.wrapper.nativeElement.childNodes[1].childNodes[0];
    this.wrapper.nativeElement.childNodes.forEach((elem: HTMLDivElement) => {
      if (elem.style) {
        elem.style.width = this.imageWidth + 'px';
      }
    });
    this.setDisabled();
    this.wrapper.nativeElement.style.animationDuration = '0s';
    this.wrapper.nativeElement.style.transitionDuration = '0s';
    this.container.nativeElement.style.height = img.clientHeight + 'px';
    this.wrapper.nativeElement.style.animationTimingFunction = 'easy-in-out';
  }

  swipe(event) {
    if (this.swiping) {
      this.wrapper.nativeElement.style.animationDuration = '0s';
      this.wrapper.nativeElement.style.transitionDuration = '0s';
      this.endPos = this.startedPos - event.clientX;
      this.swipeDirection = event.clientX < this.startedPos ? 'left' : 'right';
      if (
        (this.swipeDirection === 'left' && this.selectedImage !== this.images.length - 1) ||
        (this.swipeDirection === 'right' && this.selectedImage > 0)
      ) {
        this.wrapper.nativeElement.style.transform =
          'translateX(-' + (this.currentTransform + this.endPos) + 'px)';
      }
    }
  }

  definedPosition() {
    if (this.swipeDirection === 'left') {
      this.next();
    } else {
      if (this.selectedImage > 0) {
        this.prev();
      }
    }
  }

  next() {
    this.wrapper.nativeElement.style.animationDuration = this.duration;
    this.wrapper.nativeElement.style.transitionDuration = this.duration;
    if (this.selectedImage < this.images.length - 1) {
      this.selectedImage++;
      this.wrapper.nativeElement.style.transform =
        'translateX(-' + this.images[this.selectedImage].translate + 'px)';
    }
    this.setDisabled();
  }

  prev() {
    this.wrapper.nativeElement.style.animationDuration = this.duration;
    this.wrapper.nativeElement.style.transitionDuration = this.duration;
    if (this.selectedImage > 0) {
      this.selectedImage--;
      this.wrapper.nativeElement.style.transform =
        'translateX(-' + this.images[this.selectedImage].translate + 'px)';
    }
    this.setDisabled();
  }

  setDisabled() {
    if (this.selectedImage === this.images.length - 1) {
      this.nextDisabled = true;
    } else {
      this.nextDisabled = false;
    }
    if (this.selectedImage === 0) {
      this.prevDisabled = true;
    } else {
      this.prevDisabled = false;
    }
  }
}
