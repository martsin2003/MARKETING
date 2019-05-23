import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentReviewsComponent } from './resident-reviews.component';

describe('ResidentReviewsComponent', () => {
  let component: ResidentReviewsComponent;
  let fixture: ComponentFixture<ResidentReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentReviewsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
