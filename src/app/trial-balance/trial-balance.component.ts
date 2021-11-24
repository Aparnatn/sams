import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

import { Observable } from 'rxjs';
import { SalesService } from '../services/sales.service';
import { Router } from '@angular/router';
import { CashSaleResponse, CreditPurchaseResponse, CreditSaleResponse, PCashSaleResponse, PurchaseReceiptResponse, SalesReceiptResponse } from '../interfaces/sales.interfaces';
@Component({
  selector: 'app-trial-balance',
  templateUrl: './trial-balance.component.html',
  styleUrls: ['./trial-balance.component.scss']
})
export class TrialBalanceComponent implements OnInit {
  TrialBalanceForm = this.formBuilder.group({
   date:"",

  });

  Cash: CashSaleResponse[];
  PCash: PCashSaleResponse[];
  receipt:SalesReceiptResponse[];
  preceipt:PurchaseReceiptResponse[];
  credit:CreditSaleResponse[];
  pcredit:CreditPurchaseResponse[];


  constructor(private http:HttpClient, private service: SalesService,private userservice: UserService,private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.service.l({}).subscribe((data) => {
      this.Cash = data;
      console.log(data);
    })
  }

  onSubmit(): void {

    this.service.l(this.TrialBalanceForm.value).subscribe((data,)=>{
      this.Cash = data;
      console.log(data);
    });

    this.service.tl(this.TrialBalanceForm.value).subscribe((data,)=>{
      this.PCash = data;
      console.log(data);
    });

      this.service.tlr(this.TrialBalanceForm.value).subscribe((data,)=>{
        this.receipt = data;
        console.log(data);
      });

        this.service.tpr(this.TrialBalanceForm.value).subscribe((data,)=>{
          this.preceipt = data;
          console.log(data);
        });

          this.service.tsr(this.TrialBalanceForm.value).subscribe((data,)=>{
            this.credit = data;
            console.log(data);
          });

            this.service.tcr(this.TrialBalanceForm.value).subscribe((data,)=>{
              this.pcredit = data;
              console.log(data);
            });

  }
}

