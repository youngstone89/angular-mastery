import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionComponent } from './accordion/accordion.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdkDragDropComponent } from './cdk-drag-drop/cdk-drag-drop.component';
import { KvPipeComponent } from './kv-pipe/kv-pipe.component';
import { MatDialogPopUpComponent } from './mat-dialog-pop-up/mat-dialog-pop-up.component';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';
import { MaterialModule } from './material-module';
import { NgmodelExampleComponent } from './ngmodel-example/ngmodel-example.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { TableSelectionExampleComponent } from './table-selection-example/table-selection-example.component';
import { XlsxDownloaderComponent } from './xlsx-downloader/xlsx-downloader.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectOverviewExampleComponent } from './select-overview-example/select-overview-example.component';
import { MatFormFieldExampleComponent } from './mat-form-field-example/mat-form-field-example.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ScrollbarComponent } from './scrollbar/scrollbar.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
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
    XlsxDownloaderComponent,
    NgmodelExampleComponent,
    TableSelectionExampleComponent,
    SelectOverviewExampleComponent,
    MatFormFieldExampleComponent,
    ScrollbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MaterialModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,

    MatDialogModule,
    MatInputModule,

    MatSlideToggleModule,

    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
