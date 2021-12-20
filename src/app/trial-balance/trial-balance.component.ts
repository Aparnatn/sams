import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { SalesService, TrialBalance } from '../services/sales.service';
import { Router } from '@angular/router';
import { CashSaleResponse, CreditPurchaseResponse, CreditSaleResponse, PCashSaleResponse, PurchaseReceiptResponse, SalesReceiptResponse } from '../interfaces/sales.interfaces';
import { CustomerResponse, LedgerResponse, LedgerStatementResponse } from '../user/login.interfaces';
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
  journals: LedgerStatementResponse[] ;
  ledgers: LedgerStatementResponse[];
  cash: CashSaleResponse[]=[];
  Pcash:PCashSaleResponse[];
  customers:CustomerResponse[]=[];
  creditPurchases:CreditPurchaseResponse[];
  
  cashPurchases: PCashSaleResponse[];
  salesReceipts: SalesReceiptResponse[];
  purchaseReceipts: PurchaseReceiptResponse[];
  credits:CreditSaleResponse[];
  pcredits:CreditPurchaseResponse[];
  PReceiptTot = 0;
  PCashTot = 0;
  PCreditTot = 0;
  CreditTot = 0;
  ReceiptTot = 0;
  CashTot = 0;
  PCashTotal: number;




  constructor(private http: HttpClient, private service: SalesService, private userservice: UserService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {



  }

  onSubmit(): void {

    this.service.getTrialB(this.TrialBalanceForm.value).subscribe((data) => {
      this.ledgers = data.ledgers;
      this.cash = data.cash;
      this.cashPurchases = data.cashPurchases;
      this.salesReceipts = data.salesReciepts;
      this.purchaseReceipts = data.purchaseReciepts;
      this.credits = data.credits;
      // this.creditPurchases = data.creditPurchases;
      this.pcredits = data.pcredits;
      this.PReceiptTot = 0;
      this.PCashTot = 0;
      this.PCreditTot = 0;
      this.CreditTot = 0;
      this.ReceiptTot = 0;
      this.CashTot = 0;
      this.PCashTotal = 0;


      
      this.purchaseReceipts.forEach(element => {
        this.PCashTot += Number(element.total3);
      });
      this.cashPurchases.forEach(element => {
        this.PCashTot += Number(element.total3);
      });
      this.cashPurchases.forEach(element => {
        this.PCashTotal += Number(element.total3);
      });
      this.pcredits.forEach(element => {
        this.PCashTotal += Number(element.total3);
      });
      this.cash.forEach(element => {
        this.PCashTot += Number(element.total3);
      });
      this.salesReceipts.forEach(element => {
        this.PCashTot += Number(element.total3);
      });
      this.pcredits.forEach(element => {
        this.PCreditTot += Number(element.total3);
      });
      this.credits.forEach(element => {
        this.CreditTot += Number(element.total3);
      });
      this.salesReceipts.forEach(element => {
        this.ReceiptTot += Number(element.total3);
      });
      this.cash.forEach(element => {
        this.CashTot += Number(element.total3);
      });
      this.credits.forEach(element => {
        this.CashTot += Number(element.total3);
      });
      this.credits.forEach(element => {
        this.CashTot += Number(element.total3);
      });

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

