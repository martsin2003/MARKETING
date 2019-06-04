import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, NgForm } from '@angular/forms';

@Component({
  selector: 'brookfield-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @ViewChild('profileFormRef') profileFormRef: NgForm;

  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.profileForm = this.initProfileForm();
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

  initProfileForm(): FormGroup {
    return this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      currentPassword: [null, [Validators.required]],
      newPassword: [null, [Validators.required]],
      consfirmPassword: [null, [Validators.required]]
    });
  }

  showErrors(field: AbstractControl) {
    return field.invalid && (field.touched || this.profileFormRef.submitted);
  }
}
