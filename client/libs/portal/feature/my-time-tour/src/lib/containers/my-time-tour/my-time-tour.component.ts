import { DetectMobileViewService } from '@brookfield/common/utilities';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brookfield-my-time-tour',
  templateUrl: './my-time-tour.component.html',
  styleUrls: ['./my-time-tour.component.scss']
})
export class MyTimeTourComponent implements OnInit {
  step = 6;
  isMobileView$: Observable<boolean>;
  constructor(private detectMobileViewService: DetectMobileViewService) {}

  ngOnInit() {
    this.isMobileView$ = this.detectMobileViewService.isMobileView();
  }

  timeStepCompleted() {
    this.step++;
  }

  nextStep() {
    this.step++;
  }

  back() {
    this.step--;
  }

  cancelAppointment() {
    this.step = 0;
  }
}
