import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourVerificationThanksComponent } from './tour-verification-thanks.component';

describe('TourVerificationThanksComponent', () => {
  let component: TourVerificationThanksComponent;
  let fixture: ComponentFixture<TourVerificationThanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TourVerificationThanksComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourVerificationThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
