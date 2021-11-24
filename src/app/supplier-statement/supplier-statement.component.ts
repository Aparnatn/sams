import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { supplierAccountStatementResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';

@Component({
  selector: 'app-supplier-statement',
  templateUrl: './supplier-statement.component.html',
  styleUrls: ['./supplier-statement.component.scss']
})
export class SupplierStatementComponent implements OnInit {
  supplierAccountForm = this.formBuilder.group({
    date:"",
    report_date:"",
   });

   supplierAcc: supplierAccountStatementResponse[];

  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    this.service.supplierAccountF({}).subscribe((data) => {
      this.supplierAcc = data;
      console.log(data);
    })
  }
  onSubmit(): void {
    this.service.supplierAccountF(this.supplierAccountForm.value,).subscribe((data,)=>{
      console.log(data);});
    // this.router.navigate(['/reports']);

    // this.router.navigate(['/reports']);
  }
}
