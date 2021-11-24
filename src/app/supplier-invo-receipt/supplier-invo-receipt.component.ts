import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { supplierInvoRcptRegResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';

@Component({
  selector: 'app-supplier-invo-receipt',
  templateUrl: './supplier-invo-receipt.component.html',
  styleUrls: ['./supplier-invo-receipt.component.scss']
})
export class SupplierInvoReceiptComponent implements OnInit {
  SupplierInvoReceiptForm = this.formBuilder.group({
    date:"",
    report_date:"",
   });

   supplierInvoRcpt: supplierInvoRcptRegResponse[];

  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    this.service.supplierInvoRF({}).subscribe((data) => {
      this.supplierInvoRcpt = data;
      console.log(data);
    })
  }
  onSubmit(): void {
    this.service.supplierInvoRF(this.SupplierInvoReceiptForm.value,).subscribe((data,)=>{
      console.log(data);});
    // this.router.navigate(['/reports']);
  }
}
