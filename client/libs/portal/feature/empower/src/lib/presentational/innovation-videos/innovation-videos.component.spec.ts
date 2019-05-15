import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationVideosComponent } from './innovation-videos.component';

describe('InnovationVideosComponent', () => {
  let component: InnovationVideosComponent;
  let fixture: ComponentFixture<InnovationVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnovationVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
