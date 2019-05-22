import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourVerificationCcComponent } from './tour-verification-cc.component';

describe('TourVerificationCcComponent', () => {
  let component: TourVerificationCcComponent;
  let fixture: ComponentFixture<TourVerificationCcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TourVerificationCcComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourVerificationCcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
