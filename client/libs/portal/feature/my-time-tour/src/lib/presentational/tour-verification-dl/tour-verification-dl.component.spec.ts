import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourVerificationDlComponent } from './tour-verification-dl.component';

describe('TourVerificationDlComponent', () => {
  let component: TourVerificationDlComponent;
  let fixture: ComponentFixture<TourVerificationDlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TourVerificationDlComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourVerificationDlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
