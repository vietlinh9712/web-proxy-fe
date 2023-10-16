import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentHistoryComponent } from './payment-history.component';
import {CoreTableModule} from "../../../shared/core-table/core-table.module";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import { DetailsComponent } from './details/details.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    PaymentHistoryComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    CoreTableModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    RouterModule.forChild([
      {

        path: '',
        component: PaymentHistoryComponent
      }
    ]),
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class PaymentHistoryModule { }
