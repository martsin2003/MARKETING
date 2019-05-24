import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'brookfield-tour-type',
  templateUrl: './tour-type.component.html',
  styleUrls: ['./tour-type.component.scss']
})
export class TourTypeComponent implements OnInit {
  @Output() nextStep = new EventEmitter<string>();
  constructor(private router: Router) {}

  ngOnInit() {}

  continue() {
    this.nextStep.emit();
  }

  back() {
    this.router.navigateByUrl('/find/home-plan-detail');
  }
}
