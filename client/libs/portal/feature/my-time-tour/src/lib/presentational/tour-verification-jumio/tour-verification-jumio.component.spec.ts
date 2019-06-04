import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourVerificationJumioComponent } from './tour-verification-jumio.component';

describe('TourVerificationJumioComponent', () => {
  let component: TourVerificationJumioComponent;
  let fixture: ComponentFixture<TourVerificationJumioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourVerificationJumioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourVerificationJumioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
