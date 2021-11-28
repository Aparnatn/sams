import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    // this.service.customerAccountSF({}).subscribe((data) => {
    //   this.customerAcc = data;
    //   console.log(data);
    // })

  }
  onSubmit(): void {
    this.service.customerAccountSF(this.customerAccountstForm.value,).subscribe((data,)=>{
      console.log(data);});
      this.service.customerAccountSF({}).subscribe((data) => {
        this.customerAcc = data;
        console.log(data);
      })
    // this.router.navigate(['/reports']);
  }

  
 back() {
  this.router.navigate(['/customerbuttons']);
}
}
