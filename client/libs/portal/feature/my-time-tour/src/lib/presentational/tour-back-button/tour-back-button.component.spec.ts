import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourBackButtonComponent } from './tour-back-button.component';

describe('TourBackButtonComponent', () => {
  let component: TourBackButtonComponent;
  let fixture: ComponentFixture<TourBackButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourBackButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourBackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
