import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeownerReviewsComponent } from './homeowner-reviews.component';

describe('HomeownerReviewsComponent', () => {
  let component: HomeownerReviewsComponent;
  let fixture: ComponentFixture<HomeownerReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeownerReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeownerReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
