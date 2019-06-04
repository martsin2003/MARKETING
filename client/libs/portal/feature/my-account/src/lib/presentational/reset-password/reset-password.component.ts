import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'brookfield-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  passwordUpdated: boolean;

  resetPasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.resetPasswordForm = this.initResetPasswordForm();
  }

  onSubmit() {
    console.log(this.resetPasswordForm);
    this.passwordUpdated = true;
  }

  initResetPasswordForm(): FormGroup {
    return this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      resetCode: [null, Validators.compose([Validators.required])],
      newPassword: [null, Validators.compose([Validators.required])],
      confirmNewPassword: [null, Validators.compose([Validators.required])]
    });
  }
}
