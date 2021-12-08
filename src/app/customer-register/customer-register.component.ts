import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { customerInvoRecptRegResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';
import { CashSaleResponse } from '../interfaces/sales.interfaces';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.scss']
})
export class CustomerRegisterComponent implements OnInit {
  CustomerInvoRForm = this.formBuilder.group({
    date:['',Validators.required],
    report_date:['',Validators.required],



   });
   Cash: CashSaleResponse[];
  CustomerIR: customerInvoRecptRegResponse[];
  constructor(private router:Router,private http:HttpClient,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    // this.service.customerInvoR({}).subscribe((data) => {
    //   this.CustomerIR = data;
    //   console.log(data);
    // })
  }

  onSubmit(): void {
    this.service.customerInvoR(this.CustomerInvoRForm.value,).subscribe((data,)=>{
      console.log(data);});
      this.service.customerInvoR({}).subscribe((data) => {
        this.CustomerIR = data;
        console.log(data);
      })
      // this.router.navigate(['/grand-hyper']);

    // this.router.navigate(['/reports']);
  }
  back() {
    this.router.navigate(['/customerbuttons']);
  }
}
