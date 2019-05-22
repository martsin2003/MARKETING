import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourTermsComponent } from './tour-terms.component';

describe('TourTermsComponent', () => {
  let component: TourTermsComponent;
  let fixture: ComponentFixture<TourTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
