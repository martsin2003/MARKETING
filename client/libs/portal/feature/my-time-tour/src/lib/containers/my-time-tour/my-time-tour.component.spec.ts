import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTimeTourComponent } from './my-time-tour.component';

describe('MyTimeTourComponent', () => {
  let component: MyTimeTourComponent;
  let fixture: ComponentFixture<MyTimeTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyTimeTourComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTimeTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
