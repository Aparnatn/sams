import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PCashSaleResponse } from '../interfaces/sales.interfaces';
import { SupplierInvoiceHistoryResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';
import { SalesService } from '../services/sales.service';

@Component({
  selector: 'app-supplier-invoice',
  templateUrl: './supplier-invoice.component.html',
  styleUrls: ['./supplier-invoice.component.scss']
})
export class SupplierInvoiceComponent implements OnInit {
  supplierInvoiceHistoryForm = this.formBuilder.group({
    date:['',Validators.required],
    report_date:['',Validators.required],
   });

   supplierIn: SupplierInvoiceHistoryResponse[];
   PCash: PCashSaleResponse[];
   assetTotal = 0;
  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,private salesservice:SalesService) { }

  ngOnInit(): void {
    // this.service.supplierInvoiceHF({}).subscribe((data) => {
    //   this.supplierIn = data;
    //   console.log(data);
    // })
  }
  onSubmit(): void {
    this.service.supplierInvoiceHF(this.supplierInvoiceHistoryForm.value,).subscribe((data,)=>{
      console.log(data);});
      this.service.supplierInvoiceHF({}).subscribe((data) => {
        this.supplierIn = data;
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
}
