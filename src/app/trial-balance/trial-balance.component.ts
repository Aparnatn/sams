import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { SalesService, TrialBalance } from '../services/sales.service';
import { Router } from '@angular/router';
import { CashSaleResponse, CreditPurchaseResponse, CreditSaleResponse, PCashSaleResponse, PurchaseReceiptResponse, SalesReceiptResponse } from '../interfaces/sales.interfaces';
import { CustomerResponse, LedgerResponse } from '../user/login.interfaces';
@Component({
  selector: 'app-trial-balance',
  templateUrl: './trial-balance.component.html',
  styleUrls: ['./trial-balance.component.scss']
})
export class TrialBalanceComponent implements OnInit {
  TrialBalanceForm = this.formBuilder.group({
    date: ["", Validators.required],
    report_date: "",

  });
  account:"Sales Accounts";
  ledgers: TrialBalance[];
  Cash: CashSaleResponse[]=[];
  Pcash:PCashSaleResponse[];
  customers:CustomerResponse[]=[];
  credit:CreditSaleResponse[];
total=0;

  constructor(private http: HttpClient, private service: SalesService, private userservice: UserService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {



  }

  onSubmit(): void {

    this.service.trial_balance(this.TrialBalanceForm.value).subscribe((data) => {
      this.ledgers = data;
      this.getcash();
      this.loadCustomers();

    });


  }
    getcash(): void{
      this.service.trial(this.TrialBalanceForm.value).subscribe((data) => {
        this.Pcash = data;
        this.calculateAsset();

      });
    }
    calculateAsset() {
      this.Pcash.forEach(element => {
        this.total = Number(element.total3) + Number(element.total3);
      });
    }

    loadCustomers(){
      this.userservice.getCustomer().subscribe((data:CustomerResponse[])=>{
        this.customers = data;
      })
    }

  back() {
    this.router.navigate(['/financial']);
  }

}

