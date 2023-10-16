import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreTableComponent } from './core-table.component';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatMenuModule} from "@angular/material/menu";
import {MatPaginatorModule} from "@angular/material/paginator";



@NgModule({
  declarations: [
    CoreTableComponent
  ],
  exports: [
    CoreTableComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule
  ]
})
export class CoreTableModule { }
