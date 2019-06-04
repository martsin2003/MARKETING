import { Router, ActivatedRoute } from '@angular/router';
import { DetectMobileViewService } from '@brookfield/common/utilities';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brookfield-my-time-tour',
  templateUrl: './my-time-tour.component.html',
  styleUrls: ['./my-time-tour.component.scss']
})
export class MyTimeTourComponent implements OnInit {
  step = 0;
  isMobileView$: Observable<boolean>;
  constructor(
    private detectMobileViewService: DetectMobileViewService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isMobileView$ = this.detectMobileViewService.isMobileView();
    const step = this.route.snapshot.queryParamMap.get('step');
    if (step) {
      this.step = Number(step);
    }
  }

  timeStepCompleted() {
    this.step++;
    this.updateRouter(this.step);
  }

  nextStep() {
    this.step++;
    this.updateRouter(this.step);
  }

  back() {
    this.step--;
    this.updateRouter(this.step);
  }

  cancelAppointment() {
    this.step = 0;
  }

  routeToUrl(url: string) {
    this.router.navigateByUrl(url);
  }

  updateRouter(step: number) {
    this.router.navigate([], {
      queryParams: {
        step
      }
    });
  }
}
