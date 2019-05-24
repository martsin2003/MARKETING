import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTourCardComponent } from './home-tour-card.component';

describe('HomeTourCardComponent', () => {
  let component: HomeTourCardComponent;
  let fixture: ComponentFixture<HomeTourCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTourCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTourCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
