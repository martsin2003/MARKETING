import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDesignDetailComponent } from './home-design-detail.component';

describe('HomeDesignDetailComponent', () => {
  let component: HomeDesignDetailComponent;
  let fixture: ComponentFixture<HomeDesignDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDesignDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDesignDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
