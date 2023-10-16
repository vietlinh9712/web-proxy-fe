import { Component, OnInit } from '@angular/core';
import {CoreTableConfig} from "../../interfaces/common";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DetailsComponent} from "./details/details.component";

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss']
})
export class PaymentHistoryComponent implements OnInit {

  data = [
    {
      name: 'Proxy ip v6',
      createdTime: '09/10/2023',
      amount: '1',
      status: 'pending',
    },
    {
      name: 'Proxy ip v6',
      createdTime: '09/10/2023',
      amount: '1',
      status: 'success',
    },
    {
      name: 'Proxy ip v6',
      createdTime: '09/10/2023',
      amount: '1',
      status: 'failed',
    },
    {
      name: 'Proxy ip v6',
      createdTime: '09/10/2023',
      amount: '1',
      status: 'pending',
    },
    {
      name: 'Proxy ip v6',
      createdTime: '09/10/2023',
      amount: '1',
      status: 'pending',
    },
  ];

  tableConfig: CoreTableConfig = {
    name: 'Lịch sử giao dịch',
    subtitle: 'Giao dịch của bạn sẽ hiển thị ở đây'
  };

  displayedColumns: string[] = ['name', 'createdTime', 'amount', 'status', 'details'];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    setTimeout((() => this.data = [...this.data]), 1000);
  }

  async openDetail(element: any) {
    let dialogRef = await this.dialog.open(DetailsComponent, {
      height: '400px',
      width: '600px',
      data: {
        value: element.name
      }
    });
  }

}
