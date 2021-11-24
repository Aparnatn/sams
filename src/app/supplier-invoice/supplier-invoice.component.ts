import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SupplierInvoiceHistoryResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';

@Component({
  selector: 'app-supplier-invoice',
  templateUrl: './supplier-invoice.component.html',
  styleUrls: ['./supplier-invoice.component.scss']
})
export class SupplierInvoiceComponent implements OnInit {
  supplierInvoiceHistoryForm = this.formBuilder.group({
    date:"",
    report_date:"",
   });

   supplierIn: SupplierInvoiceHistoryResponse[];

  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    this.service.supplierInvoiceHF({}).subscribe((data) => {
      this.supplierIn = data;
      console.log(data);
    })
  }
  onSubmit(): void {
    this.service.supplierInvoiceHF(this.supplierInvoiceHistoryForm.value,).subscribe((data,)=>{
      console.log(data);});
    // this.router.navigate(['/reports']);
  }
}
