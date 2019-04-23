import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyBrookfieldComponent } from './why-brookfield.component';

describe('WhyBrookfieldComponent', () => {
  let component: WhyBrookfieldComponent;
  let fixture: ComponentFixture<WhyBrookfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyBrookfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyBrookfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
