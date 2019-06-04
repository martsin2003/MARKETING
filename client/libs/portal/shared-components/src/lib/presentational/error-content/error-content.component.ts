import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { errorMappings } from './error-mappings';

@Component({
  selector: 'brookfield-error-content',
  templateUrl: './error-content.component.html',
  styleUrls: ['./error-content.component.scss']
})
export class ErrorContentComponent implements OnInit, OnChanges, OnDestroy {
  @Input() formControlTitle: string;
  @Input() errors: ValidationErrors | null;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  errorToDisplay: string;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.errors && changes.errors.currentValue) {
      this.findErrors();
    }
  }

  private findErrors() {
    const firstErrorKey = Object.keys(this.errors)[0];
    this.errorToDisplay = errorMappings[this.formControlTitle][firstErrorKey];
  }
}
