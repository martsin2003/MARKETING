import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitiesSelectedComponent } from './communities-selected.component';

describe('CommunitiesSelectedComponent', () => {
  let component: CommunitiesSelectedComponent;
  let fixture: ComponentFixture<CommunitiesSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitiesSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitiesSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
