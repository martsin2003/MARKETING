import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitiesCompareComponent } from './communities-compare.component';

describe('CommunitiesCompareComponent', () => {
  let component: CommunitiesCompareComponent;
  let fixture: ComponentFixture<CommunitiesCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommunitiesCompareComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitiesCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
