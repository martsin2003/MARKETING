import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlansOptionsComponent } from './home-plans-options.component';

describe('HomePlansOptionsComponent', () => {
  let component: HomePlansOptionsComponent;
  let fixture: ComponentFixture<HomePlansOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePlansOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePlansOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
