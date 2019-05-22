import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTimeHomeToursComponent } from './my-time-home-tours.component';

describe('MyTimeHomeToursComponent', () => {
  let component: MyTimeHomeToursComponent;
  let fixture: ComponentFixture<MyTimeHomeToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyTimeHomeToursComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTimeHomeToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
