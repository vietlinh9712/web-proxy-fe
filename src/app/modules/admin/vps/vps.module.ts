import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VpsComponent } from './vps.component';
import { CreateComponent } from './create/create.component';
import {CoreTableModule} from "../../../shared/core-table/core-table.module";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    VpsComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    CoreTableModule,
    MatTableModule,
    MatSortModule,
    RouterModule.forChild([
      {

        path: '',
        component: VpsComponent
      }
    ]),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class VpsModule { }
