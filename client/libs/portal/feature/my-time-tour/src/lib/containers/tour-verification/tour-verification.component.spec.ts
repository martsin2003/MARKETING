import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourVerificationComponent } from './tour-verification.component';

describe('TourVerificationComponent', () => {
  let component: TourVerificationComponent;
  let fixture: ComponentFixture<TourVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TourVerificationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
