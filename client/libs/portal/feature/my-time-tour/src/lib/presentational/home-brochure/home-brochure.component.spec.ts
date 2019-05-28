import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBrochureComponent } from './home-brochure.component';

describe('HomeBrochureComponent', () => {
  let component: HomeBrochureComponent;
  let fixture: ComponentFixture<HomeBrochureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBrochureComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBrochureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
