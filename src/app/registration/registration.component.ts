import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user/user.service';
import { CustomerResponse } from '../user/login.interfaces';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  RegistrationForm = this.formBuilder.group({
    customer_name:"",
    vat_reg_no:"",
    cr_no:"",
    expired_on:"",
    land_phone:"",
    mobile:"",
    contact_person:"",
    contact_mobile:"",
    email:"",
    address:"",
    open_balance:"",
    credit_lim_am:"",
    credit_lim_dur:"",

  });
Customers:CustomerResponse[]=[];
  userService: any;
  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:UserService,) { }


  ngOnInit(): void {
    this.loadCustomers();
  }
  private loadCustomers() {
    this.service.getCustomers().subscribe((data: CustomerResponse[]) => {
      this.Customers = data;
    })
  }
  onSubmit(): void {

    this.service.customer(this.RegistrationForm.value).subscribe((data,)=>{
      console.log(data);});
      this.router.navigate(['/grand-hyper']);
  }
}
