import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogPopUpComponent } from './mat-dialog-pop-up.component';

describe('MatDialogPopUpComponent', () => {
  let component: MatDialogPopUpComponent;
  let fixture: ComponentFixture<MatDialogPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatDialogPopUpComponent]
    });
    fixture = TestBed.createComponent(MatDialogPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
