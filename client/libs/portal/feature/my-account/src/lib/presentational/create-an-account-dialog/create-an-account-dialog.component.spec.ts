import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnAccountDialogComponent } from './create-an-account-dialog.component';

describe('CreateAnAccountDialogComponent', () => {
  let component: CreateAnAccountDialogComponent;
  let fixture: ComponentFixture<CreateAnAccountDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAnAccountDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnAccountDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
