import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Ledger } from '../user/login.interfaces';
import { Observable } from 'rxjs';
import { SalesService } from '../services/sales.service';
import { BSFrom, CashFrom, CashSaleResponse, CreditPurchaseResponse, CreditSaleResponse, PCashFrom, PCashSaleResponse, PurchaseReceiptResponse, SalesReceiptResponse } from '../interfaces/sales.interfaces';

@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.scss']
})
export class BalanceSheetComponent implements OnInit {
  BsForm = this.formBuilder.group({
    date: ["", Validators.required],
    report_date: ["", Validators.required],

  });

  assetTotal = 0;
  liabilityTotal = 0;
  cash: CashSaleResponse[];
  cashPurchases: PCashSaleResponse[];
  salesReceipts: SalesReceiptResponse[];
  purchaseReceipts: PurchaseReceiptResponse[];
  credits:CreditSaleResponse[];
  pcredits:CreditPurchaseResponse[];
  Pliability = 0;
  Cliability = 0;
  LTliability = 0;
  CBAccount = 0;
  CAsset = 0;
  FAsset = 0;
  grossProfit1 = 0;
  grossProfit2 = 0;
  


  constructor(
    private http: HttpClient,
    private salesservice: SalesService,
    private userservice: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.salesservice.getBalanceSheet(this.BsForm.value).subscribe((data) => {
      this.cash = data.cash;
      this.cashPurchases = data.cashPurchases;
      this.salesReceipts = data.salesReciepts;
      this.purchaseReceipts = data.purchaseReciepts;
      this.credits = data.credits;
      this.pcredits = data.pcredits;
      let total = 0;
      this.assetTotal = 0;
      this.liabilityTotal = 0;
      this.Pliability = 0;
      this.Cliability = 0;
      this.LTliability = 0;
      this.CBAccount = 0;
      this.CAsset = 0;
      this.FAsset = 0;
      this.grossProfit1=0;
      this.grossProfit2=0;
    
     
      this.purchaseReceipts.forEach(element => {
        this.Pliability += Number(element.total3);
      });
      this.cashPurchases.forEach(element => {
        this.Cliability += Number(element.total3);
      });
      this.pcredits.forEach(element => {
        this.Cliability += Number(element.total3);
      });
      this.credits.forEach(element => {
        this.CAsset += Number(element.total3);
      });
      this.salesReceipts.forEach(element => {
        this.CBAccount += Number(element.total3);
      });
      this.cash.forEach(element => {
        this.CAsset += Number(element.total3);
      });
      
      this.grossProfit1 = this.Pliability + this.Cliability + this.LTliability;
      // this.liabilityTotal = this.Iincome - this.Iexpense;
      this.grossProfit2 = this.CBAccount + this.CAsset + this.FAsset;
  });


    //   this.cashPurchases.forEach(element => {
    //     this.Cliability += Number(element.total3);

    //   });
    //   this.cash.forEach(element => {
    //     this.assetTotal += Number(element.total3);

    //   });
    //   this.salesReceipts.forEach(element => {
    //     this.liabilityTotal += Number(element.total3);
    //   });
    //   this.purchaseReceipts.forEach(element => {
    //     this.liabilityTotal += Number(element.total3);
    //   });
    // });
  }



  back() {
    this.router.navigate(['/financial']);
  }



}
