import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import { CustomerResponse } from '../user/login.interfaces';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  RegistrationForm = this.formBuilder.group({
    customer_name: ['',Validators.required],
    vat_reg_no: ['',Validators.required],
    cr_no: ['',Validators.required],
    expired_on: ['',Validators.required],
    land_phone: ['',Validators.required],
    mobile: ['',Validators.required],
    contact_person: ['',Validators.required],
    contact_mobile: ['',Validators.required],
    email: ['',Validators.required],
    address: ['',Validators.required],
    open_balance: ['',Validators.required],
    credit_lim_am: ['',Validators.required],
    credit_lim_dur: ['',Validators.required],

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
  delete(event:number) {
    // if(confirm("Are you sure to delete this customer ?")) {
      this.service.customerdelete(event).subscribe(
        () => {
          alert('Deleted successfully');
          this.loadCustomers();
        },
        () => {
          alert('Somethin went wrong!! Please try again later.');
        }
      );

    return false
  }
  onSubmit(): void {

    this.service.customer(this.RegistrationForm.value).subscribe((data,)=>{
      console.log(data);});
      this.router.navigate(['/grand-hyper']);
  }
  back() {
    this.router.navigate(['/register']);
  }
}
