import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlanDetailComponent } from './home-plan-detail.component';

describe('HomePlanDetailComponent', () => {
  let component: HomePlanDetailComponent;
  let fixture: ComponentFixture<HomePlanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePlanDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePlanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
