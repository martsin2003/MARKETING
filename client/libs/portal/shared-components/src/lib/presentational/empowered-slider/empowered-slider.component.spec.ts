import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoweredSliderComponent } from './empowered-slider.component';

describe('EmpoweredSliderComponent', () => {
  let component: EmpoweredSliderComponent;
  let fixture: ComponentFixture<EmpoweredSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmpoweredSliderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpoweredSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
