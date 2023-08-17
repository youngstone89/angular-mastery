import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  expressionList = [
    { title: 'Title 1', summary: 'Summary 1', content: 'Content 1' },
    { title: 'Title 2', summary: 'Summary 2', content: 'Content 2' },
    { title: 'Title 3', summary: 'Summary 3', content: 'Content 3' },
  ]
  drop($event: any) {
    console.log($event);
  }
}
