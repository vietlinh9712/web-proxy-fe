import { Component, OnInit } from '@angular/core';
import {CoreTableConfig} from "../../interfaces/common";
import {CommonService} from "../../../core/services/common.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards: any = [
    {
      title: 'Số tiền đã nạp',
      value: '100.000',
      unit: 'VND',
      color: 'text-blue-500',
      bottomLabel: '',
      bottomValue: '',
    },
    {
      title: 'Sản phẩm đã mua',
      value: '5',
      unit: 'Giao dịch',
      color: 'text-secondary',
      bottomLabel: 'Lần cuối thanh toán:',
      bottomValue: '12/10/2022',
    },
    {
      title: 'Số tiền đã nạp',
      value: '100.000',
      unit: 'VND',
      color: 'text-amber-600 dark:text-amber-500',
      bottomLabel: 'Lần cuối thanh toán:',
      bottomValue: '12/10/2022',
    },
    {
      title: 'Số tiền đã nạp',
      value: '100.000',
      unit: 'VND',
      color: 'text-green-600 dark:text-green-500',
      bottomLabel: '',
      bottomValue: '',
    }
  ];

  data = [];

  tableConfig: CoreTableConfig = {
    name: 'Thông báo',
    subtitle: 'Cập nhật thông báo trong thời gian thực'
  };

  displayedColumns: string[] = ['username', 'content', 'amount', 'createdTime'];

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    setTimeout((() => this.data = [...this.data]), 1000);
    this.commonService.messages.subscribe((data: any) => {
      console.log(data);
      if(data.data) {
        const newElement = [{
          username: data.data.user.email.substring(0,3).concat('******'),
          content: `Taì khoản ${data.data.user.email.substring(0,3).concat('******')} đã mua gói proxy`,
          amount: data.data.total_amount + 'đ',
          createdTime: data.data.created_time * 1000
        }];
        if(this.data.length > 10) {
          this.data.pop();
        }
        this.data = newElement.concat(this.data);
      }
    });
  }

}
