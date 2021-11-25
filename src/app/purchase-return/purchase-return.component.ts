import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from '../services/sales.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import { CustomerResponse, ItemResponse, JobResponse } from '../user/login.interfaces';
@Component({
  selector: 'app-purchase-return',
  templateUrl: './purchase-return.component.html',
  styleUrls: ['./purchase-return.component.scss']
})
export class PurchaseReturnComponent implements OnInit {
  PurchaseReturnForm = this.formBuilder.group({
    invoice_number: ['',Validators.required],
    date: ['',Validators.required],
    internal_ref_no: ['',Validators.required],
    due_on: ['',Validators.required],
    user_id: ['',Validators.required],
    credit_limit_amt: ['',Validators.required],
    supp_id: ['',Validators.required],
    supp_name: ['',Validators.required],
    item_id1: ['',Validators.required],
    item_id2: ['',Validators.required],
    item_details1: ['',Validators.required],
    item_details2: ['',Validators.required],
    price1_1: ['',Validators.required],

    price1_2: ['',Validators.required],

    quantity1:['',Validators.required],
    quantity2:['',Validators.required],

    amount1:['',Validators.required],
    amount2:['',Validators.required],
    sales_ex1:['',Validators.required],
    sales_ex2:['',Validators.required],
    job1:['',Validators.required],
    job2:['',Validators.required],
    labour_charge:['',Validators.required],
    other_charge:['',Validators.required],
    total1:['',Validators.required],
    total2:['',Validators.required],
    total3:['',Validators.required],
    total4:['',Validators.required],

    discount:['',Validators.required],


  });
  private fieldArray: Array<any> = [];
            private newAttribute: any = {};
            Customer: CustomerResponse[];
            Item:ItemResponse[];
            Job:JobResponse[];
  constructor( private userService: UserService,private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:SalesService,) { }

  ngOnInit(): void {
    this.userService.getCustomer().subscribe((data: CustomerResponse[]) => {
      this.Customer = data;

      data.forEach(d => {
        this.PurchaseReturnForm.patchValue({
          customer_name: d.customer_name,
          customer_id: d.id
        });
      });

    })
    this.userService.getItem().subscribe((data: ItemResponse[]) => {
      this.Item = data;

      data.forEach(d => {
        this.PurchaseReturnForm.patchValue({
         item_details1: d.item_details1,
          item_id1: d.id
        });
      });

    })
    this.userService.getJob().subscribe((data: JobResponse[]) => {
      this.Job = data;

      data.forEach(d => {
        this.PurchaseReturnForm.patchValue({
          job1: d.job1,
         job_id: d.id
        });
      });

    })
  }
  onSubmit1(): void {

    this.service.creditPurchase(this.PurchaseReturnForm.value,).subscribe((data,)=>{
      console.log(data);});
      this.router.navigate(['/grand-hyper']);
  }

}
