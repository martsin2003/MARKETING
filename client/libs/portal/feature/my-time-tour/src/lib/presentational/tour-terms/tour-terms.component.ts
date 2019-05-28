import { Observable } from 'rxjs';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { TourStepData } from '../../view-model/tour-step.interface';

@Component({
  selector: 'brookfield-tour-terms',
  templateUrl: './tour-terms.component.html',
  styleUrls: ['./tour-terms.component.scss']
})
export class TourTermsComponent implements OnInit {
  constructor() {}
  data: TourStepData;
  accept: boolean;
  @Input() isMobileView$: Observable<boolean>;
  @Output() nextStep = new EventEmitter<string>();
  @Output() goBack = new EventEmitter<string>();
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

  back() {
    this.goBack.emit();
  }
}
