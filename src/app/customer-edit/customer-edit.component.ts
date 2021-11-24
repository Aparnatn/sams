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
    id: "",
    customer_name: "",
    vat_reg_no: "",
    cr_no: "",
    expired_on: "",
    land_phone: "",
    mobile: "",
    contact_person: "",
    contact_mobile: "",
    email: "",
    address: "",
    open_balance: "",
    credit_lim_am: "",
    credit_lim_dur: "",

  });
  customers: CustomerResponse[] = [];
  constructor(
    private http: HttpClient,
    private userservice: UserService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: UserService,
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        params => {
          this.id = params.id;
          this.fetchcustomers();
        },
        error => {
          console.log(`Error on person view`, error);
        },
      );
  }

  private fetchcustomers() {
    this.service.getcust(this.id).subscribe((Customers: Customer) => {
      this.CustomereditForm.patchValue({
        id: Customers.id,
        customer_name: Customers.customer_name,
        vat_reg_no: Customers.vat_reg_no,
        cr_no: Customers.cr_no,
        expired_on: Customers.expired_on,
        land_phone: Customers.land_phone,
        mobile: Customers.mobile,
        contact_person: Customers.contact_person,
        contact_mobile: Customers.contact_mobile,
        email: Customers.email,
        address: Customers.address,
        open_balance: Customers.open_balance,
        credit_lim_am: Customers.credit_lim_am,
        credit_lim_dur: Customers.credit_lim_dur,

      });
    })
  }

  onSubmit(): void {

    this.service.customeredit(this.CustomereditForm.value, this.id).subscribe((data,) => {
      console.log(data);
    });
  }
}

