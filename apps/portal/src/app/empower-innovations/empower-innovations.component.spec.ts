import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpowerInnovationsComponent } from './empower-innovations.component';

describe('EmpowerInnovationsComponent', () => {
  let component: EmpowerInnovationsComponent;
  let fixture: ComponentFixture<EmpowerInnovationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpowerInnovationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpowerInnovationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
