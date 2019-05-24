import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TourStepData } from '../../interfaces/tour-step.interface';

@Component({
  selector: 'brookfield-tour-reason',
  templateUrl: './tour-reason.component.html',
  styleUrls: ['./tour-reason.component.scss']
})
export class TourReasonComponent implements OnInit {
  constructor() {}
  data: TourStepData;
  accept: boolean;
  @Output() nextStep = new EventEmitter<string>();
  ngOnInit() {
    this.data = {
      step: 4,
      stepsCount: 5,
      title: 'Select the Reason for Your Tour'
    };
  }

  continue() {
    this.nextStep.emit();
  }
}
