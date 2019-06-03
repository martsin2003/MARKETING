import { Router } from '@angular/router';
import { DetectMobileViewService } from '@brookfield/common/utilities';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brookfield-my-time-tour',
  templateUrl: './my-time-tour.component.html',
  styleUrls: ['./my-time-tour.component.scss']
})
export class MyTimeTourComponent implements OnInit {
  step = 2;
  isMobileView$: Observable<boolean>;
  constructor(private detectMobileViewService: DetectMobileViewService, private router: Router) {}

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

  routeToUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
