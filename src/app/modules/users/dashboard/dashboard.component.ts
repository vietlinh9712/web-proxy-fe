import { Component, OnInit } from '@angular/core';
import {CoreTableConfig} from "../../interfaces/common";

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

  data = [
    {
      username: 'viet****',
      content: 'Tài khoản *** vừa mua gói proxy cơ bản với giá 15000đ',
      amount: '15000đ'
    },
    {
      username: 'viet****',
      content: 'Tài khoản *** vừa mua gói proxy cơ bản với giá 15000đ',
      amount: '15000đ'
    },
    {
      username: 'viet****',
      content: 'Tài khoản *** vừa mua gói proxy cơ bản với giá 15000đ',
      amount: '15000đ'
    },
    {
      username: 'viet****',
      content: 'Tài khoản *** vừa mua gói proxy cơ bản với giá 15000đ',
      amount: '15000đ'
    },
    {
      username: 'viet****',
      content: 'Tài khoản *** vừa mua gói proxy cơ bản với giá 15000đ',
      amount: '15000đ'
    },
    {
      username: 'viet****',
      content: 'Tài khoản *** vừa mua gói proxy cơ bản với giá 15000đ',
      amount: '15000đ'
    },
    {
      username: 'viet****',
      content: 'Tài khoản *** vừa mua gói proxy cơ bản với giá 15000đ',
      amount: '15000đ'
    },
    {
      username: 'viet****',
      content: 'Tài khoản *** vừa mua gói proxy cơ bản với giá 15000đ',
      amount: '15000đ'
    },
    {
      username: 'viet****',
      content: 'Tài khoản *** vừa mua gói proxy cơ bản với giá 15000đ',
      amount: '15000đ'
    },
    {
      username: 'viet****',
      content: 'Tài khoản *** vừa mua gói proxy cơ bản với giá 15000đ',
      amount: '15000đ'
    },
    {
      username: 'viet****',
      content: 'Tài khoản *** vừa mua gói proxy cơ bản với giá 15000đ',
      amount: '15000đ'
    },
    {
      username: 'viet****',
      content: 'Tài khoản *** vừa mua gói proxy cơ bản với giá 15000đ',
      amount: '15000đ'
    },
    {
      username: 'viet****',
      content: 'Tài khoản *** vừa mua gói proxy cơ bản với giá 15000đ',
      amount: '15000đ'
    },
    {
      username: 'viet****',
      content: 'Tài khoản *** vừa mua gói proxy cơ bản với giá 15000đ',
      amount: '15000đ'
    },
    {
      username: 'viet****',
      content: 'Tài khoản *** vừa mua gói proxy cơ bản với giá 15000đ',
      amount: '15000đ'
    },
    {
      username: 'viet****',
      content: 'Tài khoản *** vừa mua gói proxy cơ bản với giá 15000đ',
      amount: '15000đ'
    },
    {
      username: 'viet****',
      content: 'Tài khoản *** vừa mua gói proxy cơ bản với giá 15000đ',
      amount: '15000đ'
    },
    {
      username: 'viet****',
      content: 'Tài khoản *** vừa mua gói proxy cơ bản với giá 15000đ',
      amount: '15000đ'
    },
  ];

  tableConfig: CoreTableConfig = {
    name: 'Thông báo',
    subtitle: 'Cập nhật thông báo trong thời gian thực'
  };

  displayedColumns: string[] = ['username', 'content', 'amount'];

  constructor() { }

  ngOnInit(): void {
    setTimeout((() => this.data = [...this.data]), 1000);
  }

}
