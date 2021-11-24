import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
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
    date:"",
    report_date: "",

  });

  assetTotal = 0;
LiabilityTotal=0;
  Cash: CashSaleResponse[];
  PCash: PCashSaleResponse[];
  credit:CreditSaleResponse[];
  pcredit:CreditPurchaseResponse[];
  service: any;

  constructor(
    private http:HttpClient,
    private salesservice: SalesService,
    private userservice: UserService,
    private router:Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.salesservice.pl({}).subscribe((data) => {
      this.Cash = data;
      console.log(data);
    })
  }

  onSubmit(): void {
    this.calculsteLiability();
    this.calculateAsset();
  }

  calculsteLiability() {
    this.salesservice.tsrl(this.BsForm.value,).subscribe((data,)=>{
      this.credit = data;
      let total=0;
            this.credit.forEach(element => {
              this.LiabilityTotal += element.total3
            });

            });

      this.salesservice.tcrlb(this.BsForm.value,).subscribe((data,)=>{
        this.pcredit = data;
        let total=0;
        this.pcredit.forEach(element => {
          this.LiabilityTotal += element.total3
        });

        });
    this.service.ls(this.BsForm.value,).subscribe((data,)=>{
      console.log(data);
    });

  }

  calculateAsset() {
    this.salesservice.lsb({}).subscribe((cash) => {
      this.Cash = cash;
      let total=0;
        this.Cash.forEach(element => {
          this.assetTotal += element.total3
        });
    });

    this.salesservice.lslb(this.BsForm.value,).subscribe((pcash)=>{
      this.PCash = pcash;
      let total=0;
        this.PCash.forEach(element => {
          this.assetTotal += element.total3
        });
    });
  }
}
