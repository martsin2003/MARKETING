import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoFormComponent } from './more-info-form.component';

describe('MoreInfoFormComponent', () => {
  let component: MoreInfoFormComponent;
  let fixture: ComponentFixture<MoreInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoreInfoFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
