import { Component, OnInit } from '@angular/core';
import { DetectMobileViewService } from '@brookfield/common/utilities';
import { Observable } from 'rxjs';

@Component({
  selector: 'brookfield-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isMobileScreen$: Observable<boolean>;

  constructor(private detectMobileViewService: DetectMobileViewService) {}

  ngOnInit() {
    this.isMobileScreen$ = this.detectMobileViewService.isMobileView();
  }
}
