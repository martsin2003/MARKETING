import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourReasonComponent } from './tour-reason.component';

describe('TourReasonComponent', () => {
  let component: TourReasonComponent;
  let fixture: ComponentFixture<TourReasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TourReasonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
