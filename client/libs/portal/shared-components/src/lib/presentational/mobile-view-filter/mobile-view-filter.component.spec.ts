import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileViewFilterComponent } from './mobile-view-filter.component';

describe('MobileViewFilterComponent', () => {
  let component: MobileViewFilterComponent;
  let fixture: ComponentFixture<MobileViewFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MobileViewFilterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileViewFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
