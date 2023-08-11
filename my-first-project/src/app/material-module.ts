import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

import {

} from '@angular/material';

@NgModule({
    imports: [
        MatExpansionModule
    ],
    exports: [

        DragDropModule,
        PortalModule,
        ScrollingModule,
        MatExpansionModule
    ]
})
export class MaterialModule { }
