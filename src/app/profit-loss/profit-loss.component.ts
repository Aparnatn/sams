import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { SalesService } from '../services/sales.service';
import { CashSaleResponse, CreditPurchaseResponse, CreditSaleResponse, PCashSaleResponse, PurchaseReceiptResponse, SalesReceiptResponse } from '../interfaces/sales.interfaces';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
@Component({
  selector: 'app-profit-loss',
  templateUrl: './profit-loss.component.html',
  styleUrls: ['./profit-loss.component.scss']
})
export class ProfitLossComponent implements OnInit {
  PandLForm = this.formBuilder.group({

date:"",
report_date:"",
  });
  cash: CashSaleResponse[];
  cashPurchases: PCashSaleResponse[];
  salesReceipts: SalesReceiptResponse[];
  credit:CreditSaleResponse[];
  pcredit:CreditPurchaseResponse[];
  purchaseReceipts: PurchaseReceiptResponse[];
  assetTotal = 0;
  liabilityTotal = 0;
  netProfit= 0;
  Dincome = 0;
  Iincome = 0;
  Dexpense = 0;
  Iexpense = 0;
  grossProfit = 0;
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
      this.credit=data.credit;
      this.pcredit=data.pcredit;
      let total = 0;
      this.assetTotal = 0;
      this.liabilityTotal = 0;
      this.netProfit=0;
      this.Dincome =0;
      this.Iincome =0;
      this.Dexpense =0;
      this.Iexpense =0;
      this.grossProfit=0;



      this.cash.forEach(element => {
        this.Dincome += Number(element.total3);
      });
      this.cashPurchases.forEach(element => {
        this.Dexpense += Number(element.total3);
      });
      this.credit.forEach(element => {
        this.Dincome += Number(element.total3);
      });
      // this.salesReceipts.forEach(element => {
      //   this.Iincome += Number(element.total3);
      // });
      this.purchaseReceipts.forEach(element => {
        this.Iexpense += Number(element.total3);
      });
      this.pcredit.forEach(element => {
        this.Dexpense += Number(element.total3);
      });
        this.grossProfit = this.Dincome + this.Dexpense;
        // this.liabilityTotal = this.Iincome - this.Iexpense;
        this.netProfit = this.grossProfit - this.Iexpense + this.Iincome;
    });
  }


  back() {
    this.router.navigate(['/financial']);
  }




}
