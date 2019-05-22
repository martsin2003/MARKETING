import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TourStepData } from '../../interfaces/tour-step.interface';

@Component({
  selector: 'brookfield-tour-verification',
  templateUrl: './tour-verification.component.html',
  styleUrls: ['./tour-verification.component.scss']
})
export class TourVerificationComponent implements OnInit {
  constructor() {}
  data: TourStepData;
  accept: boolean;
  step: string = 'selectType';
  @Output() nextStep = new EventEmitter<string>();
  ngOnInit() {
    this.data = {
      step: 3,
      stepsCount: 5,
      title: 'Verification'
    };
  }
}
