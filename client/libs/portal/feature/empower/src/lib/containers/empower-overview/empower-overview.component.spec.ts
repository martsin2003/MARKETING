import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpowerOverviewComponent } from './empower-overview.component';

describe('EmpowerOverviewComponent', () => {
  let component: EmpowerOverviewComponent;
  let fixture: ComponentFixture<EmpowerOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpowerOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpowerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
