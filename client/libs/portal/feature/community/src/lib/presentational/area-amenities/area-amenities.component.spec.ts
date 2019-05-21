import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAmenitiesComponent } from './area-amenities.component';

describe('AreaAmenitiesComponent', () => {
  let component: AreaAmenitiesComponent;
  let fixture: ComponentFixture<AreaAmenitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AreaAmenitiesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
