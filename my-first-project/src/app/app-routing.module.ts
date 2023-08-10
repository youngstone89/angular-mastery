import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { CdkDragDropComponent } from './cdk-drag-drop/cdk-drag-drop.component';

const routes: Routes = [
  {
    path: 'slide-toggle', component: SlideToggleComponent,
  },
  {
    path: 'cdk-drag-drop', component: CdkDragDropComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
