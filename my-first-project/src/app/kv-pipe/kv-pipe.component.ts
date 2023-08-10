import { Component } from '@angular/core';

@Component({
  selector: 'app-kv-pipe',
  templateUrl: './kv-pipe.component.html',
  styleUrls: ['./kv-pipe.component.css']
})
export class KvPipeComponent {
  students = {
    Susane: [4, 3, 2, 1, 5],
    Jenifer: [3, 5, 2, 2],
    John: [5, 3, 3, 4, 1]
  };

}
