import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

import { SalesService } from '../services/sales.service';
import { CustomerMasterdataResponse } from '../interfaces/sales.interfaces';
@Component({
  selector: 'app-customer-master',
  templateUrl: './customer-master.component.html',
  styleUrls: ['./customer-master.component.scss']
})
export class CustomerMasterComponent implements OnInit {
  CustomerMasterDataForm = this.formBuilder.group({
   date:"",
    report_date:"",



  });
  Customer: CustomerMasterdataResponse[];
  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:SalesService,) { }

  ngOnInit(): void {
    this.service.customermaster({}).subscribe((data) => {
      this.Customer = data;
      console.log(data);
    })
  }
  onSubmit(): void {

    this.service.customermaster(this.CustomerMasterDataForm.value,).subscribe((data,)=>{
      console.log(data);});
      // this.router.navigate(['/grand-hyper']);
  }
}
