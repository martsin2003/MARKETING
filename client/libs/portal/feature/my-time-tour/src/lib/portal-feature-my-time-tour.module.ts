import { MaterialModule } from '@brookfield/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyTimeTourComponent } from './containers/my-time-tour/my-time-tour.component';
import { TourStepComponent } from './presentational/tour-step/tour-step.component';
import { TourTypeComponent } from './presentational/tour-type/tour-type.component';
import { TourTimeComponent } from './presentational/tour-time/tour-time.component';
import { TourTermsComponent } from './presentational/tour-terms/tour-terms.component';
import { TourVerificationComponent } from './containers/tour-verification/tour-verification.component';
import { TourVerificationCcComponent } from './presentational/tour-verification-cc/tour-verification-cc.component';
import { TourVerificationPhotoComponent } from './presentational/tour-verification-photo/tour-verification-photo.component';
import { TourVerificationThanksComponent } from './presentational/tour-verification-thanks/tour-verification-thanks.component';
import { TourReasonComponent } from './presentational/tour-reason/tour-reason.component';
import { TourCreatePasswordComponent } from './presentational/tour-create-password/tour-create-password.component';
import { TourConfirmComponent } from './presentational/tour-confirm/tour-confirm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TourVerificationTypeComponent } from './presentational/tour-verification-type/tour-verification-type.component';
import { TourBackButtonComponent } from './presentational/tour-back-button/tour-back-button.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { HomeBrochureComponent } from './presentational/home-brochure/home-brochure.component';
import { TourVerificationPhotoTypeComponent } from './presentational/tour-verification-photo-type/tour-verification-photo-type.component';
import { TourVerificationJumioComponent } from './presentational/tour-verification-jumio/tour-verification-jumio.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: MyTimeTourComponent }])
  ],
  declarations: [
    MyTimeTourComponent,
    TourStepComponent,
    TourTypeComponent,
    TourTimeComponent,
    TourTermsComponent,
    TourVerificationComponent,
    TourVerificationCcComponent,
    TourVerificationPhotoComponent,
    TourVerificationThanksComponent,
    TourReasonComponent,
    TourCreatePasswordComponent,
    TourConfirmComponent,
    TourVerificationTypeComponent,
    TourBackButtonComponent,
    HomeBrochureComponent,
    TourVerificationPhotoTypeComponent,
    TourVerificationJumioComponent
  ],
  entryComponents: [TourVerificationPhotoTypeComponent]
})
export class PortalFeatureMyTimeTourModule {}
