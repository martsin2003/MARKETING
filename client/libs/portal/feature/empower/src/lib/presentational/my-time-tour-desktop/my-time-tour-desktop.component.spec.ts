import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTimeTourDesktopComponent } from './my-time-tour-desktop.component';

describe('MyTimeTourDesktopComponent', () => {
  let component: MyTimeTourDesktopComponent;
  let fixture: ComponentFixture<MyTimeTourDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyTimeTourDesktopComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTimeTourDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
