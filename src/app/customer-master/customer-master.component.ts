import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

import { SalesService } from '../services/sales.service';
import { CustomerMasterdataResponse } from '../interfaces/sales.interfaces';
import { ReportsService } from '../reports/reports.service';
@Component({
  selector: 'app-customer-master',
  templateUrl: './customer-master.component.html',
  styleUrls: ['./customer-master.component.scss']
})
export class CustomerMasterComponent implements OnInit {
  CustomerMasterDataForm = this.formBuilder.group({
    date:['',Validators.required],
    report_date:['',Validators.required],
  });
  Customer: CustomerMasterdataResponse[];
  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,private salesservice:SalesService) { }

  ngOnInit(): void {
  
  }
  onSubmit(): void {
    this.service.customer_masterD(this.CustomerMasterDataForm.value).subscribe((pcash) => {
      this.Customer = pcash;

      
    });
      }
  back() {
    this.router.navigate(['/customerbuttons']);
  }
}
