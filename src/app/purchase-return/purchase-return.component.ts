import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from '../services/sales.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import { CustomerResponse, ItemResponse, JobResponse } from '../user/login.interfaces';
import { CashFrom } from '../interfaces/sales.interfaces';
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
    item_id1: [''],
    item_id2: ['',Validators.required],
    item_details1: [''],
    item_details2: ['',Validators.required],
    price1_1: [''],

    price1_2: ['',Validators.required],

    quantity1:[''],
    quantity2:['',Validators.required],

    amount1:[''],
    amount2:['',Validators.required],
    sales_ex1:[''],
    sales_ex2:['',Validators.required],
    job1:[''],
    job2:['',Validators.required],
    labour_charge:[''],
    other_charge:[''],
    total1:['',Validators.required],
    total2:['',Validators.required],
    total3:['',Validators.required],
    total4:['',],

    discount:[''],


  });
   fieldArray: Array<any> = [];
             newAttribute: any = {};
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
  calcualtTotal() {
    const form: CashFrom = this.PurchaseReturnForm.value;

    const amount1 = Number(form.price1_1) * Number(form.quantity1);
    const amount2 = Number(form.price1_2) * Number(form.quantity2);
    const amount3 = amount1+amount2
    const total1 = amount3+Number(form.labour_charge) + Number(form.other_charge);
    const total2 = total1 - Number(form.discount);
    const total3 = total2

    this.PurchaseReturnForm.patchValue({
      "amount1": amount1,
      "amount2": amount2,
      "total1": total1,
      "total2": String(total2),
      "total3": total3,
      "cash": total3

    });
  }
  
  onSubmit1(): void {

    this.service.creditPurchase(this.PurchaseReturnForm.value,).subscribe((data,)=>{
      console.log(data);});
      this.router.navigate(['/grand-hyper']);
  }
  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
}
back() {
  this.router.navigate(['/purchase']);
}
i=0;
deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
}

}
