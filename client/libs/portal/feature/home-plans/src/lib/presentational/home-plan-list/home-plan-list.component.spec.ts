import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlanListComponent } from './home-plan-list.component';

describe('HomePlanListComponent', () => {
  let component: HomePlanListComponent;
  let fixture: ComponentFixture<HomePlanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePlanListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
