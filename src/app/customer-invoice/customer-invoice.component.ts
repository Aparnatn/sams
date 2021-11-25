import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CashSaleResponse } from '../interfaces/sales.interfaces';
import { CustomerInvoiceHistoryResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';

@Component({
  selector: 'app-customer-invoice',
  templateUrl: './customer-invoice.component.html',
  styleUrls: ['./customer-invoice.component.scss']
})
export class CustomerInvoiceComponent implements OnInit {
 customerInviceForm = this.formBuilder.group({
    report_date:['',Validators.required],
   });

   customerIN: CustomerInvoiceHistoryResponse[];
   assetTotal = 0;
   Cash: CashSaleResponse[];
  salesservice: any;
  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    this.service.customeInvoicetHF({}).subscribe((data) => {
      this.customerIN = data;
      console.log(data);
    })
  }
  onSubmit(): void {
    this.service.customeInvoicetHF(this.customerInviceForm.value,).subscribe((data,)=>{
      console.log(data);});
    // this.router.navigate(['/reports']);
    this.calculateAsset();


  }
  calculateAsset() {
    this.salesservice.lsb({}).subscribe((cash) => {
      this.Cash = cash;
      let total=0;
        this.Cash.forEach(element => {
          this.assetTotal  +=element.total+element.amount2
        });
    });

    
  }
}
