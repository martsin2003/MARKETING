import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDetailInfoComponent } from './home-detail-info.component';

describe('HomeDetailInfoComponent', () => {
  let component: HomeDetailInfoComponent;
  let fixture: ComponentFixture<HomeDetailInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDetailInfoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
