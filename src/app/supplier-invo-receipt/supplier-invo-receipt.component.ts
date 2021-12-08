import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PCashSaleResponse } from '../interfaces/sales.interfaces';
import { supplierInvoRcptRegResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';

@Component({
  selector: 'app-supplier-invo-receipt',
  templateUrl: './supplier-invo-receipt.component.html',
  styleUrls: ['./supplier-invo-receipt.component.scss']
})
export class SupplierInvoReceiptComponent implements OnInit {
  SupplierInvoReceiptForm = this.formBuilder.group({
    date:['',Validators.required],
    report_date:['',Validators.required],
   });

   supplierInvoRcpt: supplierInvoRcptRegResponse[];
   PCash: PCashSaleResponse[];

  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    // this.service.supplierInvoRF({}).subscribe((data) => {
    //   this.supplierInvoRcpt = data;
    //   console.log(data);
    // })
  }
  onSubmit(): void {
    this.service.supplier_invoRR(this.SupplierInvoReceiptForm.value).subscribe((cash) => {
      this.PCash = cash;
    });
  }
  
 back() {
  this.router.navigate(['/supplierbuttons']);
}
}
