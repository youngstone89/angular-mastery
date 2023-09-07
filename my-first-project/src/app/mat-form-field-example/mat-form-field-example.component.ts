import { Component } from '@angular/core';


@Component({
  selector: 'app-mat-form-field-example',
  templateUrl: './mat-form-field-example.component.html',
  styleUrls: ['./mat-form-field-example.component.css']
})
export class MatFormFieldExampleComponent {

  onModelChange($event: any) {
    console.log($event);
    this.food = $event;
    console.log(`this.food: ${this.food}`)
  }
  food: any;
  ngOnInit() {
    this.food = "Sushe"
  }
  reset() {
    this.food = "";
  }
}
