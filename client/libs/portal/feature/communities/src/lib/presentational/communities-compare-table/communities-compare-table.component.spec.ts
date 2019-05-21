import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitiesCompareTableComponent } from './communities-compare-table.component';

describe('CommunitiesCompareTableComponent', () => {
  let component: CommunitiesCompareTableComponent;
  let fixture: ComponentFixture<CommunitiesCompareTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommunitiesCompareTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitiesCompareTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
