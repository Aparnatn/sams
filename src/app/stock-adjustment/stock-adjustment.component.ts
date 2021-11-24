import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CashSaleResponse, CreditPurchaseResponse, CreditSaleResponse, PCashSaleResponse } from '../interfaces/sales.interfaces';
import { ReportsService } from '../reports/reports.service';


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

  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    this.service.chs3({}).subscribe((data) => {
      this.Cash = data;
      console.log(data);
    })
  }
  onSubmit(): void {

    this.service.chs3(this.StockAdjustmentForm.value).subscribe((data,)=>{
      this.Cash = data;
      console.log(data);
    });

    this.service.pchs3(this.StockAdjustmentForm.value).subscribe((data,)=>{
      this.PCash = data;
      console.log(data);
    });

      this.service.crs3(this.StockAdjustmentForm.value).subscribe((data,)=>{
            this.credit = data;
            console.log(data);
          });

            this.service.crp3(this.StockAdjustmentForm.value).subscribe((data,)=>{
              this.pcredit = data;
              console.log(data);
            });

  }


}
