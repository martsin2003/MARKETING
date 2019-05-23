import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyHomeFeatureComponent } from './key-home-feature.component';

describe('KeyHomeFeatureComponent', () => {
  let component: KeyHomeFeatureComponent;
  let fixture: ComponentFixture<KeyHomeFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KeyHomeFeatureComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyHomeFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
