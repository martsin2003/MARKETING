import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveFloorPlanComponent } from './interactive-floor-plan.component';

describe('InteractiveFloorPlanComponent', () => {
  let component: InteractiveFloorPlanComponent;
  let fixture: ComponentFixture<InteractiveFloorPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InteractiveFloorPlanComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveFloorPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
