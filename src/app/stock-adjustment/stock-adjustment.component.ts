import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CashSaleResponse, CreditPurchaseResponse, CreditSaleResponse, PCashSaleResponse } from '../interfaces/sales.interfaces';
import { ReportsService } from '../reports/reports.service';
import { ItemResponse } from '../user/login.interfaces';


@Component({
  selector: 'app-stock-adjustment',
  templateUrl: './stock-adjustment.component.html',
  styleUrls: ['./stock-adjustment.component.scss']
})
export class StockAdjustmentComponent implements OnInit {
  StockAdjustmentForm = this.formBuilder.group({
    date:"",
    report_date:"",

   });

   Cash: CashSaleResponse[];
   PCash: PCashSaleResponse[];
   credit:CreditSaleResponse[];
   pcredit:CreditPurchaseResponse[];
   item:ItemResponse[];
  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {

  }
  onSubmit(): void {

    this.service.stock_adjustment(this.StockAdjustmentForm.value).subscribe((data,)=>{
      this.Cash = data;

    });


  }



  back() {
    this.router.navigate(['/itemjobbuttons']);
  }


}
