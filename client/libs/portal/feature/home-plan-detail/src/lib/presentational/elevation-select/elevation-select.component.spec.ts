import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevationSelectComponent } from './elevation-select.component';

describe('ElevationSelectComponent', () => {
  let component: ElevationSelectComponent;
  let fixture: ComponentFixture<ElevationSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ElevationSelectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevationSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
