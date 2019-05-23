import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'brookfield-tour-verification-dl',
  templateUrl: './tour-verification-dl.component.html',
  styleUrls: ['./tour-verification-dl.component.scss']
})
export class TourVerificationDlComponent implements OnInit {
  @Output() takePhotos = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  takePhotosClick() {
    this.takePhotos.emit();
  }
}
