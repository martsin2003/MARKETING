import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCenterComponent } from './sales-center.component';

describe('SalesCenterComponent', () => {
  let component: SalesCenterComponent;
  let fixture: ComponentFixture<SalesCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SalesCenterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
