import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  expressionList: any[] = [];
  constructor() {
    this.expressionList = [
      { title: 'Title 1', summary: 'Summary 1', content: 'Content 1' },
      { title: 'Title 2', summary: 'Summary 2', content: 'Content 2' },
      { title: 'Title 3', summary: 'Summary 3', content: 'Content 3' },
    ]
  }

  add($event: MouseEvent) {
    let length = this.expressionList.length;
    const index = length + 1;
    this.expressionList.push(
      { title: 'Title ' + index, summary: 'Summary ' + index, content: 'Content ' + index },
    )
  }


  drop($event: any) {
    console.log($event);
  }
}
