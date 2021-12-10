import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CashSaleResponse, CreditPurchaseResponse, CreditSaleResponse, PCashSaleResponse } from '../interfaces/sales.interfaces';
import { StockBalanceResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';
import { ItemResponse } from '../user/login.interfaces';


@Component({
  selector: 'app-stock-balance',
  templateUrl: './stock-balance.component.html',
  styleUrls: ['./stock-balance.component.scss']
})
export class StockBalanceComponent implements OnInit {
  stockbalanceForm = this.formBuilder.group({
    date:['',Validators.required],
    report_date:['',Validators.required],
   });

   stockb: StockBalanceResponse[];
   Cash: CashSaleResponse[];
   PCash: PCashSaleResponse[];
   credit:CreditSaleResponse[];
   pcredit:CreditPurchaseResponse[];
   item:ItemResponse[];

  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.service.stock_balance(this.stockbalanceForm.value).subscribe((data,)=>{
      this.Cash = data;
    });
  
  }
  back() {
    this.router.navigate(['/itemjobbuttons']);
  }
}
