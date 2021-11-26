import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { SalesService } from '../services/sales.service';
import { Router } from '@angular/router';
import { CashSaleResponse, CreditPurchaseResponse, CreditSaleResponse, PCashSaleResponse, PurchaseReceiptResponse, SalesReceiptResponse } from '../interfaces/sales.interfaces';
import { LedgerResponse } from '../user/login.interfaces';
@Component({
  selector: 'app-trial-balance',
  templateUrl: './trial-balance.component.html',
  styleUrls: ['./trial-balance.component.scss']
})
export class TrialBalanceComponent implements OnInit {
  TrialBalanceForm = this.formBuilder.group({
   date:["", Validators.required],

  });

  Cash: CashSaleResponse[];
  PCash: PCashSaleResponse[];
  receipt:SalesReceiptResponse[];
  preceipt:PurchaseReceiptResponse[];
  credit:CreditSaleResponse[];
  pcredit:CreditPurchaseResponse[];

  Ledger: LedgerResponse[];
  constructor(private http:HttpClient, private service: SalesService,private userservice: UserService,private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  onSubmit(): void {

    this.service.l(this.TrialBalanceForm.value).subscribe((data,)=>{
      this.Cash = data;
      console.log(data);
    });
    this.userservice.getLedgers().subscribe((data) => {
      this.Ledger = data;
      console.log(data);
    })}
    calculateTotal(total_1: string | number, total_2: string | number, ledgers: LedgerResponse[]) {
      let total = Number(total_1) - Number(total_2);

      (ledgers || []).forEach(ledger => {
        total += Number(ledger.opening_bal);
      });
      return total;
    }

}

