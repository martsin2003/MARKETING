import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainNavComponent } from './home-main-nav.component';

describe('HomeMainNavComponent', () => {
  let component: HomeMainNavComponent;
  let fixture: ComponentFixture<HomeMainNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMainNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
