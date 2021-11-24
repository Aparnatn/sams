import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { customerOutstandingResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';

@Component({
  selector: 'app-customer-outstanding',
  templateUrl: './customer-outstanding.component.html',
  styleUrls: ['./customer-outstanding.component.scss']
})
export class CustomerOutstandingComponent implements OnInit {
  customerOutstandForm = this.formBuilder.group({
    date:"",
    report_date:"",
   });

   customerOut: customerOutstandingResponse[];

  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    this.service.customerOutstandF({}).subscribe((data) => {
      this.customerOut = data;
      console.log(data);
    })
  }
  onSubmit(): void {
    this.service.customerOutstandF(this.customerOutstandForm.value,).subscribe((data,)=>{
      console.log(data);});
    // this.router.navigate(['/reports']);
  }
}
