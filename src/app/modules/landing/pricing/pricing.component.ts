import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CardPricing} from "../../interfaces/landing";

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
})
export class PricingComponent implements OnInit {

    formGroup: FormGroup;
    formArray: FormArray;
    cards: CardPricing[] = [
        {
            title: 'Proxy ipv6',
            desc: 'Phù hợp cho reg acc, tăng like, tăng share các dịch vụ liên quan đến facebook và google...',
            isPopular: true
        },
        {
            title: 'Ipv4',
            desc: 'Ipv4 public khong share'
        },
        {
            title: 'Ipv4 xoay',
            desc: 'ipv4 xoay cho reg acc, các tác vụ cần đổi ip liên tục.'
        }
    ];

  constructor(
      private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
      this.formGroup = this.fb.group({
          card: this.fb.array(
              this.cards.map(() => this.fb.group({
                  country: ['usa'],
                  amount: [1, Validators.required],
                  period: ['1day'],
                  type: ['http']
              })))
      });
  }

}
