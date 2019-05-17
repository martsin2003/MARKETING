import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityMicrositeComponent } from './community-microsite.component';

describe('CommunityMicrositeComponent', () => {
  let component: CommunityMicrositeComponent;
  let fixture: ComponentFixture<CommunityMicrositeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityMicrositeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityMicrositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
