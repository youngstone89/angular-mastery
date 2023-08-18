import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogPopUpComponent } from '../mat-dialog-pop-up/mat-dialog-pop-up.component';


@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.css']
})
export class MatDialogComponent {

  title: string;

  constructor(public dialog: MatDialog) {
    this.title = 'Angular';
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MatDialogPopUpComponent, {
      width: '250px',
      data: { title: this.title }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.title = result.title;
    });
  }
}
