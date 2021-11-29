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
      let total = 0;
      this.assetTotal = 0;
      this.liabilityTotal = 0;

      this.cashPurchases.forEach(element => {
        this.assetTotal += Number(element.total3);
      });
      this.cash.forEach(element => {
        this.assetTotal += Number(element.total3);
      });
      this.salesReceipts.forEach(element => {
        this.liabilityTotal += Number(element.total3);
      });
      this.purchaseReceipts.forEach(element => {
        this.liabilityTotal += Number(element.total3);
      });
    });
  }


  
  back() {
    this.router.navigate(['/financial']);
  }



}
