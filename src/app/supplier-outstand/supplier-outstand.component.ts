import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { supplierOutstandingResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';

@Component({
  selector: 'app-supplier-outstand',
  templateUrl: './supplier-outstand.component.html',
  styleUrls: ['./supplier-outstand.component.scss']
})
export class SupplierOutstandComponent implements OnInit {
  supplierOutstandForm = this.formBuilder.group({
    date:"",
    report_date:"",
   });

   supplierOut: supplierOutstandingResponse[];


  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    this.service.supplierOutstandF({}).subscribe((data) => {
      this.supplierOut = data;
      console.log(data);
    })
  }
  onSubmit(): void {
    this.service.supplierOutstandF(this.supplierOutstandForm.value,).subscribe((data,)=>{
      console.log(data);});
    // this.router.navigate(['/reports']);


    // this.router.navigate(['/reports']);
  }
}
