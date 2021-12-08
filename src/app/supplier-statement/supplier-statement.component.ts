import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseReceiptResponse } from '../interfaces/sales.interfaces';
import { supplierAccountStatementResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';

@Component({
  selector: 'app-supplier-statement',
  templateUrl: './supplier-statement.component.html',
  styleUrls: ['./supplier-statement.component.scss']
})
export class SupplierStatementComponent implements OnInit {
  supplierAccountForm = this.formBuilder.group({
    date:['',Validators.required],
    report_date:['',Validators.required],
   });

   supplierAcc: supplierAccountStatementResponse[];
   PReceipt : PurchaseReceiptResponse[];

  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    
  }
  onSubmit(): void {
    this.service.supplier_Accoun(this.supplierAccountForm.value).subscribe((pcash) => {
      this.PReceipt = pcash;
    });
    // this.service.supplierAccountF(this.supplierAccountForm.value,).subscribe((data,)=>{
    //   console.log(data);});
    // this.service.supplierAccountF({}).subscribe((data) => {
    //     this.supplierAcc = data;
    //      console.log(data);
    //   })
    // this.router.navigate(['/reports']);

    // this.router.navigate(['/reports']);
  }
  back() {
    this.router.navigate(['/supplierbuttons']);
  }
}
