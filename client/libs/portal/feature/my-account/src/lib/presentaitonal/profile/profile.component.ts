import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'brookfield-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
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
      firstName: [null, Validators.compose([Validators.required])],
      lastName: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      currentPassword: [null, Validators.compose([Validators.required])],
      newPassword: [null, Validators.compose([Validators.required])],
      consfirmPassword: [null, Validators.compose([Validators.required])]
    });
  }
}
