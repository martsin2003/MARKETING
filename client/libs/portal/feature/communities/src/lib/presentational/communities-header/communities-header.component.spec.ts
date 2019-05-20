import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitiesHeaderComponent } from './communities-header.component';

describe('CommunitiesHeaderComponent', () => {
  let component: CommunitiesHeaderComponent;
  let fixture: ComponentFixture<CommunitiesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommunitiesHeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitiesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
