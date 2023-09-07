import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormFieldExampleComponent } from './mat-form-field-example.component';

describe('MatFormFieldExampleComponent', () => {
  let component: MatFormFieldExampleComponent;
  let fixture: ComponentFixture<MatFormFieldExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatFormFieldExampleComponent]
    });
    fixture = TestBed.createComponent(MatFormFieldExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
