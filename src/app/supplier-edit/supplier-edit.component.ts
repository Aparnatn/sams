import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Supplier, SupplierResponse } from '../user/login.interfaces';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.scss']
})
export class SupplierEditComponent implements OnInit {
  id: number;
  suppliereditForm = this.formBuilder.group({
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
 suppliers:SupplierResponse[]=[];
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
    //                 this.fetchsuppliers();
    //             },
    //             error => {
    //                 console.log(`Error on person view`, error);
    //             },
    //         );
  }

  // private fetchsuppliers() {
  //  this.service.getsupp(this.id).subscribe((suppliers: Supplier) => {
  //    this.suppliereditForm.setValue({
  //      id: suppliers.id,
  //      customer_name:suppliers.customer_name,
  //      vat_reg_no:suppliers.vat_reg_no,
  //      cr_no:suppliers.cr_no,
  //      expired_on:suppliers.expired_on,
  //      land_phone:suppliers.land_phone,
  //      mobile:suppliers.mobile,
  //      contact_person:suppliers.contact_person,
  //      contact_mobile:suppliers. contact_mobile,
  //      email:suppliers.email,
  //      address:suppliers.address,
  //      open_balance:suppliers.open_balance,
  //      credit_lim_am:suppliers.credit_lim_am,
  //      credit_lim_dur:suppliers.credit_lim_dur,

  //    });
  //  })
  // }

  onSubmit1(): void {

    this.service.supplieredit(this.suppliereditForm.value,this.id).subscribe((data,)=>{
      console.log(data);});
  }
}
