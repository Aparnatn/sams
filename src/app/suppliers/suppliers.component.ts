import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user/user.service';
import { SupplierResponse } from '../user/login.interfaces';
@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {
  SupplierForm = this.formBuilder.group({
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
    bank_acc_name:"",
    bank_acc_no:"",

  });
  Suppliers:SupplierResponse[]=[];
  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:UserService,) { }

  ngOnInit(): void {
    this.loadSuppliers();
  }
  private loadSuppliers() {
    this.service.getSuppliers().subscribe((data: SupplierResponse[]) => {
      this.Suppliers = data;
    })
  }
  onSubmit1(): void {

    this.service.supplier(this.SupplierForm.value,).subscribe((data,)=>{
      console.log(data);});
      this.router.navigate(['/grand-hyper']);
  }

}
