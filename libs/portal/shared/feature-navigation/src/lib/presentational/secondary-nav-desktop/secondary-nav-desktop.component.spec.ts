import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryNavDesktopComponent } from './secondary-nav-desktop.component';

describe('SecondaryNavDesktopComponent', () => {
  let component: SecondaryNavDesktopComponent;
  let fixture: ComponentFixture<SecondaryNavDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryNavDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryNavDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
