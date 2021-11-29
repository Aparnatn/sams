import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { SalesService } from '../services/sales.service';
import { CashSaleResponse, PCashSaleResponse, PurchaseReceiptResponse, SalesReceiptResponse } from '../interfaces/sales.interfaces';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
@Component({
  selector: 'app-profit-loss',
  templateUrl: './profit-loss.component.html',
  styleUrls: ['./profit-loss.component.scss']
})
export class ProfitLossComponent implements OnInit {
  PandLForm = this.formBuilder.group({

date:"",
  });
  cash: CashSaleResponse[];
  cashPurchases: PCashSaleResponse[];
  salesReceipts: SalesReceiptResponse[];
  purchaseReceipts: PurchaseReceiptResponse[];
  assetTotal = 0;
  liabilityTotal = 0;
netProfit=0;
  // items = this.userservice.ledgers();
  constructor(private http:HttpClient,private salesservice: SalesService,private router:Router,private formBuilder: FormBuilder,private service:SalesService,) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.salesservice.getpl(this.PandLForm.value).subscribe((data) => {
      this.cash = data.cash;
      this.cashPurchases = data.cashPurchases;
      this.salesReceipts= data.salesReciepts;
      this.purchaseReceipts = data.purchaseReciepts;
      let total = 0;
      this.assetTotal = 0;
      this.liabilityTotal = 0;
      this.netProfit=0;

      this.cash.forEach(element => {
        this.assetTotal += Number(element.total3);
      });
      this.cashPurchases.forEach(element => {
        this.assetTotal -= Number(element.total3);
      });
      this.salesReceipts.forEach(element => {
        this.liabilityTotal += Number(element.total3);
      });
      this.purchaseReceipts.forEach(element => {
        this.liabilityTotal += Number(element.total3);
      });

        this.netProfit = this.assetTotal - this.liabilityTotal;

    });
  }

  
  back() {
    this.router.navigate(['/financial']);
  }




}
