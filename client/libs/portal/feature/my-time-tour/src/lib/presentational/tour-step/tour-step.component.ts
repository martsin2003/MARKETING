import { withLatestFrom } from 'rxjs/operators';
import { DetectMobileViewService } from './../../../../../../../common/utilities/src/lib/detect-mobile-view/detect-mobile-view.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { TourStepData } from '../../view-model/tour-step.interface';

@Component({
  selector: 'brookfield-tour-step',
  templateUrl: './tour-step.component.html',
  styleUrls: ['./tour-step.component.scss']
})
export class TourStepComponent implements OnInit {
  isMobileScreen$: Observable<boolean>;
  @Input() whiteBackground: boolean;
  @Input() data: TourStepData;
  steps: number[];
  constructor(private detectMobileViewService: DetectMobileViewService) {}

  ngOnInit() {
    this.steps = [];
    this.steps.length = this.data.stepsCount;

    this.isMobileScreen$ = this.detectMobileViewService.isMobileView();
  }
}
