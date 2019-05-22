import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TourStepData } from '../../interfaces/tour-step.interface';

@Component({
  selector: 'brookfield-tour-terms',
  templateUrl: './tour-terms.component.html',
  styleUrls: ['./tour-terms.component.scss']
})
export class TourTermsComponent implements OnInit {
  constructor() {}
  data: TourStepData;
  accept: boolean;
  @Output() nextStep = new EventEmitter<string>();
  ngOnInit() {
    this.data = {
      step: 2,
      stepsCount: 5,
      title: 'Terms and Conditions'
    };
  }

  acceptClick() {
    this.nextStep.emit();
  }
}
