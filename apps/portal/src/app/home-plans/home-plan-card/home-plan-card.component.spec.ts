import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlanCardComponent } from './home-plan-card.component';

describe('HomePlanCardComponent', () => {
  let component: HomePlanCardComponent;
  let fixture: ComponentFixture<HomePlanCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePlanCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePlanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
