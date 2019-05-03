import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlansListComponent } from './home-plans-list.component';

describe('HomePlansListComponent', () => {
  let component: HomePlansListComponent;
  let fixture: ComponentFixture<HomePlansListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePlansListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePlansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
