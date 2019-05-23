import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TourStepData } from '../../view-model/tour-step.interface';
import { TourVerificationStep } from '../../view-model/tour-verification.types';

@Component({
  selector: 'brookfield-tour-verification',
  templateUrl: './tour-verification.component.html',
  styleUrls: ['./tour-verification.component.scss']
})
export class TourVerificationComponent implements OnInit {
  constructor() {}
  data: TourStepData;
  accept: boolean;
  verificationStep: TourVerificationStep = TourVerificationStep.cc;
  @Output() nextStep = new EventEmitter<string>();
  ngOnInit() {
    this.data = {
      step: 3,
      stepsCount: 5,
      title: 'Verification'
    };
  }

  verificationSelected(step: TourVerificationStep) {
    if (step === TourVerificationStep.cc) {
      this.data = Object.assign({}, this.data, { title: 'Credit Card Verification' });
    } else if (step === TourVerificationStep.photo) {
      this.data = Object.assign({}, this.data, {
        title: 'Identity Verification: Your Driver’s License'
      });
    }
    console.log('step: ', step);
    this.verificationStep = step;
  }

  takePhotos() {
    this.verificationStep = TourVerificationStep.thanks;
  }

  next() {
    this.nextStep.emit();
  }
}
