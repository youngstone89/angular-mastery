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
import { AccordionComponent } from './accordion/accordion.component';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';
import { MatDialogPopUpComponent } from './mat-dialog-pop-up/mat-dialog-pop-up.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { XlsxDownloaderComponent } from './xlsx-downloader/xlsx-downloader.component';
@NgModule({
  declarations: [
    AppComponent,
    SlideToggleComponent,
    CdkDragDropComponent,
    KvPipeComponent,
    KvPipeComponent,
    AccordionComponent,
    MatDialogComponent,
    MatDialogPopUpComponent,
    XlsxDownloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MaterialModule,
    FormsModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
