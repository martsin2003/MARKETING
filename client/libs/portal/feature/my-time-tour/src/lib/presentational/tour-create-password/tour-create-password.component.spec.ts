import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourCreatePasswordComponent } from './tour-create-password.component';

describe('TourCreatePasswordComponent', () => {
  let component: TourCreatePasswordComponent;
  let fixture: ComponentFixture<TourCreatePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourCreatePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourCreatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
