import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CashSaleResponse } from '../interfaces/sales.interfaces';
import { CustomerInvoiceHistoryResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';
import { SalesService } from '../services/sales.service';

@Component({
  selector: 'app-customer-invoice',
  templateUrl: './customer-invoice.component.html',
  styleUrls: ['./customer-invoice.component.scss']
})
export class CustomerInvoiceComponent implements OnInit {
 customerInviceForm = this.formBuilder.group({
  date:['',Validators.required],
  report_date:['',Validators.required],
   });

   customerIN: CustomerInvoiceHistoryResponse[];
   assetTotal = 0;
   Cash: CashSaleResponse[];

  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,private salesservice:SalesService) { }

  ngOnInit(): void {
    // this.service.customeInvoicetHF({}).subscribe((data) => {
    //   this.customerIN = data;
    //   console.log(data);
    // })
  }
  onSubmit(): void {
    this.service.customeInvoicetHF(this.customerInviceForm.value,).subscribe((data,)=>{
      console.log(data);});
      this.service.customeInvoicetHF({}).subscribe((data) => {

        this.customerIN = data;
        console.log(data);
      })

    // this.router.navigate(['/reports']);
    this.calculateAsset(this.assetTotal);


  }
  calculateAsset(assetTotal:Number) {
    this.service.customer_invoice({}).subscribe((cash) => {
      this.Cash = cash;

        this.Cash.forEach(element => {
          this.assetTotal  +=  Number(element.price1_1) + Number(element.amount2);
        });
        return Number(assetTotal);
    });

  }
}
