import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { SalesService } from '../services/sales.service';
import { CashSaleResponse, PCashSaleResponse, PurchaseReceiptResponse, SalesReceiptResponse } from '../interfaces/sales.interfaces';
@Component({
  selector: 'app-profit-loss',
  templateUrl: './profit-loss.component.html',
  styleUrls: ['./profit-loss.component.scss']
})
export class ProfitLossComponent implements OnInit {
  PandLForm = this.formBuilder.group({

date:"",
  });
  Cash: CashSaleResponse[];
  PCash: PCashSaleResponse[];
  receipt:SalesReceiptResponse[];
  preceipt:PurchaseReceiptResponse[];
  // items = this.userservice.ledgers();
  constructor(private http:HttpClient,private salesservice: SalesService,private router:Router,private formBuilder: FormBuilder,private service:SalesService,) { }

  ngOnInit(): void {
    this.salesservice.pl({}).subscribe((data) => {
      this.Cash = data;
      console.log(data);
    })
  }

  onSubmit(): void {

    this.service.pl(this.PandLForm.value,).subscribe((data,)=>{
      this.Cash = data;
      console.log(data);});

    this.service.p(this.PandLForm.value,).subscribe((data,)=>{
      this.PCash = data;
      console.log(data);});

      this.service.r(this.PandLForm.value,).subscribe((data,)=>{
        this.receipt = data;
        console.log(data);});

        this.service.pr(this.PandLForm.value,).subscribe((data,)=>{
          this.preceipt = data;
          console.log(data);});


  }
}
