import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, CustomerResponse } from '../user/login.interfaces';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  id: number;
  CustomereditForm = this.formBuilder.group({
    id:"",
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
 customers:CustomerResponse[]=[];
  constructor(
    private http:HttpClient,
    private userservice: UserService,
    private route:ActivatedRoute,
    private formBuilder: FormBuilder,
    private service:UserService,
  ) { }

  ngOnInit(): void {
    // this.route.params
    //         .subscribe(
    //             params => {
    //                 this.id = params.id;
    //                 this.fetchcustomers();
    //             },
    //             error => {
    //                 console.log(`Error on person view`, error);
    //             },
    //         );
  }

  // private fetchcustomers() {
  //  this.service.getcust(this.id).subscribe((customers: Customer) => {
  //    this.CustomereditForm.setValue({
  //      id: customers.id,
  //      customer_name:customers.customer_name,
  //      vat_reg_no:customers.vat_reg_no,
  //      cr_no:customers.cr_no,
  //      expired_on:customers.expired_on,
  //      land_phone:customers.land_phone,
  //      mobile:customers.mobile,
  //      contact_person:customers.contact_person,
  //      contact_mobile:customers. contact_mobile,
  //      email:customers.email,
  //      address:customers.address,
  //      open_balance:customers.open_balance,
  //      credit_lim_am:customers.credit_lim_am,
  //      credit_lim_dur:customers.credit_lim_dur,

  //    });
  //  })
  // }

  onSubmit1(): void {

    this.service.customeredit(this.CustomereditForm.value,this.id).subscribe((data,)=>{
      console.log(data);});
  }
}
