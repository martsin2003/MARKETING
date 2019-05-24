import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TourStepData } from '../../interfaces/tour-step.interface';

@Component({
  selector: 'brookfield-tour-create-password',
  templateUrl: './tour-create-password.component.html',
  styleUrls: ['./tour-create-password.component.scss']
})
export class TourCreatePasswordComponent implements OnInit {
  constructor() {}
  data: TourStepData;
  accept: boolean;
  @Output() nextStep = new EventEmitter<string>();
  @Output() goBack = new EventEmitter<string>();
  ngOnInit() {
    this.data = {
      step: 5,
      stepsCount: 5,
      title: 'Create a Password for Your Account'
    };
  }

  continue() {
    this.nextStep.emit();
  }

  back() {
    this.goBack.emit();
  }
}
