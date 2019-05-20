import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmpoweredComponent } from './get-empowered.component';

describe('GetEmpoweredComponent', () => {
  let component: GetEmpoweredComponent;
  let fixture: ComponentFixture<GetEmpoweredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEmpoweredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEmpoweredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
