import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopViewFilterComponent } from './desktop-view-filter.component';

describe('DesktopViewFilterComponent', () => {
  let component: DesktopViewFilterComponent;
  let fixture: ComponentFixture<DesktopViewFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopViewFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopViewFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
