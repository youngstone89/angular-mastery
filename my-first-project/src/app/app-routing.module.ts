import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { CdkDragDropComponent } from './cdk-drag-drop/cdk-drag-drop.component';
import { KvPipeComponent } from './kv-pipe/kv-pipe.component';
import { AccordionComponent } from './accordion/accordion.component';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';

const routes: Routes = [
  {
    path: 'slide-toggle', component: SlideToggleComponent,
  },
  {
    path: 'cdk-drag-drop', component: CdkDragDropComponent,
  },
  {
    path: 'key-value-pipe', component: KvPipeComponent,
  },
  {
    path: 'accordion', component: AccordionComponent,
  },
  {
    path: 'dialog', component: MatDialogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
