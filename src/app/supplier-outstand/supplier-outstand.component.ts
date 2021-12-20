import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseReceiptResponse } from '../interfaces/sales.interfaces';
import { supplierOutstandingResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';

@Component({
  selector: 'app-supplier-outstand',
  templateUrl: './supplier-outstand.component.html',
  styleUrls: ['./supplier-outstand.component.scss']
})
export class SupplierOutstandComponent implements OnInit {
  supplierOutstandForm = this.formBuilder.group({
    from_date:['',Validators.required],

    report_date:['',Validators.required],
   });

   supplierOut: supplierOutstandingResponse[];
   PReceipt : PurchaseReceiptResponse[];


  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    // this.service.supplierOutstandF({}).subscribe((data) => {
    //   this.supplierOut = data;
    //   console.log(data);
    // })
  }
  onSubmit(): void {
    this.service.supplier_out(this.supplierOutstandForm.value).subscribe((data) => {
      this.PReceipt = data;
    });


    // this.router.navigate(['/reports']);


    // this.router.navigate(['/reports']);
  }

 back() {
  this.router.navigate(['/supplierbuttons']);
}
}
