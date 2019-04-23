import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMyHomeComponent } from './find-my-home.component';

describe('FindMyHomeComponent', () => {
  let component: FindMyHomeComponent;
  let fixture: ComponentFixture<FindMyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindMyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
