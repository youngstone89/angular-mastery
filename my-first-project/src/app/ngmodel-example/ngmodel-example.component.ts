import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ngmodel-example',
  templateUrl: './ngmodel-example.component.html',
  styleUrls: ['./ngmodel-example.component.css']
})
export class NgmodelExampleComponent {

  name: string = '';
  hide: boolean = false;

  onChange(value: any) {
    console.log(value);
    if (this.name !== value) {
      console.log(`[prev: ${this.name}] [next: ${value}]]`)
      this.name = value;
    }
  }




  setValue() {
    this.name = 'Nancy';
  }
}
