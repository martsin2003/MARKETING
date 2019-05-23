import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TourVerificationStep } from '../../view-model/tour-verification.types';

@Component({
  selector: 'brookfield-tour-verification-type',
  templateUrl: './tour-verification-type.component.html',
  styleUrls: ['./tour-verification-type.component.scss']
})
export class TourVerificationTypeComponent implements OnInit {
  @Output() verificationSelected = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  verify(type: TourVerificationStep) {
    this.verificationSelected.emit(type);
  }
}
