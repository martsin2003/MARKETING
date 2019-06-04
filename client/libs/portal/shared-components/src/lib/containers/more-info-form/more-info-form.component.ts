import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'brookfield-more-info-form',
  templateUrl: './more-info-form.component.html',
  styleUrls: ['./more-info-form.component.scss']
})
export class MoreInfoFormComponent implements OnInit {
  @Input() containerHomeDesignDetail: { title: string; homeName: string };

  moreInfoForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.moreInfoForm = this.initMoreInfoForm();
  }

  onSubmit() {
    console.log(this.moreInfoForm.value);
  }

  initMoreInfoForm(): FormGroup {
    return this.fb.group({
      firstName: [null, Validators.compose([Validators.required])],
      lastName: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      phone: [null, Validators.compose([Validators.required])],
      comments: null,
      private: null,
      promotion: null
    });
  }
}
