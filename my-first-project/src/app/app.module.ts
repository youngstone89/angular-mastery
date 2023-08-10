import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CdkDragDropComponent } from './cdk-drag-drop/cdk-drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MaterialModule } from './material-module';
import { KvPipeComponent } from './kv-pipe/kv-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideToggleComponent,
    CdkDragDropComponent,
    KvPipeComponent,
    KvPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
