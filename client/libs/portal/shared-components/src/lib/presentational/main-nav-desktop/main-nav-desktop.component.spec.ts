import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavDesktopComponent } from './main-nav-desktop.component';

describe('MainNavDesktopComponent', () => {
  let component: MainNavDesktopComponent;
  let fixture: ComponentFixture<MainNavDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainNavDesktopComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
