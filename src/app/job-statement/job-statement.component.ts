import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CashSaleResponse, CreditPurchaseResponse, CreditSaleResponse, PCashSaleResponse } from '../interfaces/sales.interfaces';
import { ReportsService } from '../reports/reports.service';
import { JobResponse } from '../user/login.interfaces';


@Component({
  selector: 'app-job-statement',
  templateUrl: './job-statement.component.html',
  styleUrls: ['./job-statement.component.scss']
})
export class JobStatementComponent implements OnInit {
  JobStatementForm = this.formBuilder.group({
    date:"",
    report_date:"",
   });

   Cash: CashSaleResponse[];
   PCash: PCashSaleResponse[];
   credit:CreditSaleResponse[];
   pcredit:CreditPurchaseResponse[];
   job:JobResponse[];





  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    // this.service.chs1({}).subscribe((data) => {
    //   this.Cash = data;
    //   console.log(data);
    // })
  }
  onSubmit(): void {

    this.service.job_Statement(this.JobStatementForm.value).subscribe((data,)=>{
      this.Cash = data;

    });

    // this.service.pchs1(this.JobStatementForm.value).subscribe((data,)=>{
    //   this.PCash = data;
    //   console.log(data);
    // });




  }
  
 
 back() {
   this.router.navigate(['/itemjobbuttons']);
 }


}
