import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SalesReceiptResponse } from '../interfaces/sales.interfaces';
import { customerOutstandingResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';

@Component({
  selector: 'app-customer-outstanding',
  templateUrl: './customer-outstanding.component.html',
  styleUrls: ['./customer-outstanding.component.scss']
})
export class CustomerOutstandingComponent implements OnInit {
  customerOutstandForm = this.formBuilder.group({
    date:['',Validators.required],
    report_date:['',Validators.required],
   });

   customerOut: customerOutstandingResponse[];
   Receipt: SalesReceiptResponse[];

  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    // this.service.customerOutstandF({}).subscribe((data) => {
    //   this.customerOut = data;
    //   console.log(data);
    // })
  }
  onSubmit(): void {
    this.service.customer_out(this.customerOutstandForm.value).subscribe((cash) => {
      this.Receipt = cash;
      })
      
  }
  
 back() {
  this.router.navigate(['/customerbuttons']);
}
}
