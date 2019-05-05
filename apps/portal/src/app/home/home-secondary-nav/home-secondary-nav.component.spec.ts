import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSecondaryNavComponent } from './home-secondary-nav.component';

describe('HomeSecondaryNavComponent', () => {
  let component: HomeSecondaryNavComponent;
  let fixture: ComponentFixture<HomeSecondaryNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSecondaryNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSecondaryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
