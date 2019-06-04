import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'brookfield-tour-verification-photo',
  templateUrl: './tour-verification-photo.component.html',
  styleUrls: ['./tour-verification-photo.component.scss']
})
export class TourVerificationPhotoComponent implements OnInit {
  @Output() takePhotos = new EventEmitter<string>();
  @Output() goBack = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  takePhotosClick() {
    this.takePhotos.emit();
  }

  back() {
    this.goBack.emit();
  }
}
