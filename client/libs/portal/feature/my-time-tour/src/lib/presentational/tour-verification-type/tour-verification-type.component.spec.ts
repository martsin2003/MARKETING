import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourVerificationTypeComponent } from './tour-verification-type.component';

describe('TourVerificationTypeComponent', () => {
  let component: TourVerificationTypeComponent;
  let fixture: ComponentFixture<TourVerificationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TourVerificationTypeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourVerificationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
