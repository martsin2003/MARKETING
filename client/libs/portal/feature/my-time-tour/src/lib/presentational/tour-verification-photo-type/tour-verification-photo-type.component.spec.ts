import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourVerificationPhotoTypeComponent } from './tour-verification-photo-type.component';

describe('TourVerificationPhotoTypeComponent', () => {
  let component: TourVerificationPhotoTypeComponent;
  let fixture: ComponentFixture<TourVerificationPhotoTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourVerificationPhotoTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourVerificationPhotoTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
