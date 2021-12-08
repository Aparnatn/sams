import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CashSaleResponse } from '../interfaces/sales.interfaces';
import { CustomerReceiptHistoryResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';

@Component({
  selector: 'app-customer-receipts',
  templateUrl: './customer-receipts.component.html',
  styleUrls: ['./customer-receipts.component.scss']
})
export class CustomerReceiptsComponent implements OnInit {

  customerReceiptForm = this.formBuilder.group({
    date:['',Validators.required],
    report_date:['',Validators.required],
   });
   Cash: CashSaleResponse[];
   assetTotal = 0;
   receipt: CustomerReceiptHistoryResponse[];
  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    // this.service.customerRcptHF({}).subscribe((data) => {
    //   this.receipt = data;
    //   console.log(data);
    // })
  }
  onSubmit(): void {
    this.service.customerRcptHF(this.customerReceiptForm.value,).subscribe((data,)=>{
      console.log(data);});
      this.service.customerRcptHF({}).subscribe((data) => {
        this.receipt = data;
        console.log(data);
      })
    // this.router.navigate(['/reports']);
    this.calculateAsset(this.assetTotal);


  }
  calculateAsset(assetTotal:Number) {
    this.service.customer_invoice({}).subscribe((cash) => {
      this.Cash = cash;

        this.Cash.forEach(element => {
          this.assetTotal  =  Number(element.amount) + Number(element.amount);
        });
        return Number(assetTotal);
    });

  }
  
 back() {
  this.router.navigate(['/customerbuttons']);
}
}
