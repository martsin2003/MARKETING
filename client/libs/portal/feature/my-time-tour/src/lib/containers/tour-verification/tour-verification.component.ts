import { MyTimeTourService } from '@brookfield/portal/core-data/data-services';
import { take } from 'rxjs/operators';
import { DetectMobileViewService } from '@brookfield/common/utilities';
import { Observable } from 'rxjs';
import { TourVerificationPhotoTypeComponent } from './../../presentational/tour-verification-photo-type/tour-verification-photo-type.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TourStepData } from '../../view-model/tour-step.interface';
import { TourVerificationStep } from '../../view-model/tour-verification.types';

@Component({
  selector: 'brookfield-tour-verification',
  templateUrl: './tour-verification.component.html',
  styleUrls: ['./tour-verification.component.scss']
})
export class TourVerificationComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private detectMobileViewService: DetectMobileViewService,
    private myTimeTourService: MyTimeTourService
  ) {}
  data: TourStepData;
  isMobileView$: Observable<boolean>;
  jumioVerificationType: string;
  jumioLink: string;
  accept: boolean;
  verificationStep: TourVerificationStep;
  @Output() nextStep = new EventEmitter<string>();
  @Output() goBack = new EventEmitter<string>();
  ngOnInit() {
    this.isMobileView$ = this.detectMobileViewService.isMobileView();
    this.data = {
      step: 3,
      stepsCount: 5,
      title: 'Verification'
    };
  }

  verificationSelected(step: TourVerificationStep) {
    if (step === TourVerificationStep.cc) {
      this.data = Object.assign({}, this.data, { title: 'Credit Card Verification' });
    } else if (step === TourVerificationStep.photo) {
      return this.showSelectDocumentTypeModal();
    }
    this.verificationStep = step;
  }

  showSelectDocumentTypeModal() {
    this.isMobileView$.pipe(take(1)).subscribe(isMobile => {
      const dialogRef = this.dialog.open(TourVerificationPhotoTypeComponent, {
        width: '80%',
        panelClass: 'favorites-dialog'
      });
      dialogRef.afterClosed().subscribe(type => {
        if (!type) return;
        this.jumioVerificationType = type;
        if (!isMobile) {
          this.data = Object.assign({}, this.data, {
            title: 'Identity Verification: Your Driver’s License'
          });
          this.verificationStep = TourVerificationStep.photo;
        } else {
          this.loadJumio();
        }
      });
    });
  }

  takePhotos() {
    this.loadJumio();
  }

  loadJumio() {
    this.myTimeTourService
      .getJumioLink(this.jumioVerificationType)
      .pipe(take(1))
      .subscribe(result => {
        this.jumioLink = result.getNetverifyLink.link;
        this.verificationStep = TourVerificationStep.jumio;
      });
  }

  jumioVerificationSubmitted() {
    this.verificationStep = TourVerificationStep.thanks;
  }

  next() {
    this.nextStep.emit();
  }

  back() {
    this.goBack.emit();
  }

  backToType() {
    this.data = Object.assign({}, this.data, {
      title: 'Verification'
    });
    this.verificationStep = null;
  }
}
