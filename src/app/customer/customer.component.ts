import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SalesReceiptResponse } from '../interfaces/sales.interfaces';
import { customerAccountStatementResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customerAccountstForm = this.formBuilder.group({
    date:['',Validators.required],
    report_date:['',Validators.required],
   });

   customerAcc: customerAccountStatementResponse[];
   Receipt: SalesReceiptResponse[];
  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    // this.service.customerAccountSF({}).subscribe((data) => {
    //   this.customerAcc = data;
    //   console.log(data);
    // })

  }
  onSubmit(): void {
    this.service.customer_account(this.customerAccountstForm.value).subscribe((cash) => {
      this.Receipt = cash;
      })
    // this.router.navigate(['/reports']);
  }

  
 back() {
  this.router.navigate(['/customerbuttons']);
}
}
