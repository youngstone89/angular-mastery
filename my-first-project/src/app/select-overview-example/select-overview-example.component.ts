import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-select-overview-example',
  templateUrl: './select-overview-example.component.html',
  styleUrls: ['./select-overview-example.component.css']
})
export class SelectOverviewExampleComponent {
  valueChange($event: any) {
    console.log(`valueChange: ${$event}`)
  }
  selectionChange($event: MatSelectChange) {
    console.log(`selectionChange: [source:${$event.source.valueChange}][target:${$event.value}]`)
  }
  openedChange($event: boolean) {
    console.log(`openedChange: ${$event}`)
  }
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

}
