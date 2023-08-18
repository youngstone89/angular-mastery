import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  title: string;
}

@Component({
  selector: 'app-mat-dialog-pop-up',
  templateUrl: './mat-dialog-pop-up.component.html',
  styleUrls: ['./mat-dialog-pop-up.component.css']
})
export class MatDialogPopUpComponent {
  constructor(
    public dialogRef: MatDialogRef<MatDialogPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
