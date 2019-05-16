import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryNavMobileComponent } from './secondary-nav-mobile.component';

describe('SecondaryNavMobileComponent', () => {
  let component: SecondaryNavMobileComponent;
  let fixture: ComponentFixture<SecondaryNavMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SecondaryNavMobileComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryNavMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
