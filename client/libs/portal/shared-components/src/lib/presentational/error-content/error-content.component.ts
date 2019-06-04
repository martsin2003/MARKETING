import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { errorMappings } from './error-mappings';

@Component({
  selector: 'brookfield-error-content',
  templateUrl: './error-content.component.html',
  styleUrls: ['./error-content.component.scss']
})
export class ErrorContentComponent implements OnInit, OnChanges {
  @Input() controlErrorsMappingKey: string;
  @Input() errors: ValidationErrors | null;

  errorToDisplay: string;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.errors && changes.errors.currentValue) {
      this.findErrors();
    }
  }

  private findErrors() {
    const firstErrorKey = Object.keys(this.errors)[0];
    this.errorToDisplay = errorMappings[this.controlErrorsMappingKey][firstErrorKey];
  }
}
