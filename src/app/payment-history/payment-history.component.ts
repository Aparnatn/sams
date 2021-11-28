import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PCashSaleResponse } from '../interfaces/sales.interfaces';
import { PaymentHistoryResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';


@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss']
})
export class PaymentHistoryComponent implements OnInit {
 PaymentHistoryForm = this.formBuilder.group({
    report_date:['',Validators.required],
   });

   payment: PaymentHistoryResponse[];
   PCash: PCashSaleResponse[];
   assetTotal = 0;
  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    // this.service.supplierPaymentHisF({}).subscribe((data) => {
    //   this.payment = data;
    //   console.log(data);
    // })
  }
  onSubmit(): void {
    this.service.supplierPaymentHisF(this.PaymentHistoryForm.value,).subscribe((data,)=>{
      console.log(data);});
      this.service.supplierPaymentHisF({}).subscribe((data) => {
        this.payment = data;
        console.log(data);
      })
    // this.router.navigate(['/reports']);
    this.calculateAsset(this.assetTotal);


  }
  calculateAsset(assetTotal:Number) {
    this.service.supplier_InvoiceHF({}).subscribe((pcash) => {
      this.PCash = pcash;

        this.PCash.forEach(element => {
          this.assetTotal  +=  Number(element.price1_1) + Number(element.amount2);
        });
        return Number(assetTotal);
    });

  }
  
 back() {
  this.router.navigate(['/supplierbuttons']);
}
}
