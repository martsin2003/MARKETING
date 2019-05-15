import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesViewHomePlansComponent } from './types-view-home-plans.component';

describe('TypesViewHomePlansComponent', () => {
  let component: TypesViewHomePlansComponent;
  let fixture: ComponentFixture<TypesViewHomePlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesViewHomePlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesViewHomePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
