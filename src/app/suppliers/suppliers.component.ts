import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import { SupplierResponse } from '../user/login.interfaces';
@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {
  SupplierForm = this.formBuilder.group({
    supplier_name: ['',Validators.required],
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
    bank_acc_name: ['',Validators.required],
    bank_acc_no: ['',Validators.required],
    credit_lim_dur: ['',Validators.required],
    credit_lim_am:['',Validators.required]
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
  delete(event:number) {
    // if(confirm("Are you sure to delete this customer ?")) {
      this.service.supplierdelete(event).subscribe(
        () => {
          alert('Deleted successfully');
          this.loadSuppliers();
        },
        () => {
          alert('Somethin went wrong!! Please try again later.');
        }
      );

    return false
  }
  onSubmit1(): void {

    this.service.supplier(this.SupplierForm.value,).subscribe((data,)=>{
      console.log(data);});
      this.router.navigate(['/grand-hyper']);
  }
  back() {
    this.router.navigate(['/register']);
  }

}
