import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourVerificationPhotoComponent } from './tour-verification-photo.component';

describe('TourVerificationPhotoComponent', () => {
  let component: TourVerificationPhotoComponent;
  let fixture: ComponentFixture<TourVerificationPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourVerificationPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourVerificationPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
