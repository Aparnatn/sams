import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from '../services/sales.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { SalesFrom, SalesReceiptRequest } from '../interfaces/sales.interfaces';
import { UserService } from '../user/user.service';
import { CustomerResponse } from '../user/login.interfaces';
@Component({
  selector: 'app-sales-receipts',
  templateUrl: './sales-receipts.component.html',
  styleUrls: ['./sales-receipts.component.scss']
})
export class SalesReceiptsComponent implements OnInit {
  SalesReceiptsForm = this.formBuilder.group({
    receipt_number:['',Validators.required],
    date:['',Validators.required],
    internal_ref_no:['',Validators.required],
    due_on:['',Validators.required],
    credit_limit_amt:['',Validators.required],
    user_id:['',Validators.required],
    customer_id:['',Validators.required],
    customer_name:['',Validators.required],
    si_no1:['',],
    si_no2:['',Validators.required],
    account:['',Validators.required],
    invoice_no1:['',],
    invoice_no2:['',Validators.required],

    invoice_date1:['',],
    invoice_date2:['',Validators.required],

    duedate1:['',],
    duedate2:['',Validators.required],

    invoice_amt1:['',],
    invoice_amt2:['',Validators.required],

    received_amt1:['',],
    received_amt2:['',Validators.required],

    outstanding1:['',],
    outstanding2:['',Validators.required],

    discount1:['',],
    discount2:['',Validators.required],

    balance_amt1:['',],
    balance_amt2:['',Validators.required],

    tick_space1:['',],
    tick_space2:['',],

    partial1:['',],
    partial2:['',],

    total1:['',Validators.required],
    total2:['',Validators.required],
    total3:['',Validators.required],

    paid_amount:['',Validators.required],

    discount:['',],
  });
  Customer: CustomerResponse[];
   fieldArray: Array<any> = [];
   newAttribute: any = {};
    constructor(private userService: UserService,private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:SalesService,) { }

    ngOnInit(): void {
      this.userService.getCustomer().subscribe((data: CustomerResponse[]) => {
        this.Customer = data;

        data.forEach(d => {
          this.SalesReceiptsForm.patchValue({
            customer_name: d.customer_name,
            customer_id: d.id
          });
        });

      })
    }
    calcualtTotal() {
      const form: SalesFrom = this.SalesReceiptsForm.value;

      const tick_space1 =   Number(form.received_amt1)+Number(form.outstanding1)-Number(form.discount1);
      const balance_amt1=  Number(form.received_amt1)+ Number(form.outstanding1)-Number(form.discount1);
      const tick_space2 =  Number(form.received_amt2)+ Number(form.outstanding2)-Number(form.discount2);
      const balance_amt2=   Number(form.received_amt2)+Number(form.outstanding2)-Number(form.discount2);
      const total1 = tick_space1+tick_space2;
      const total2 = tick_space1+tick_space2-Number(form.discount);
      const total3 = tick_space1+tick_space2-Number(form.discount);


      this.SalesReceiptsForm.patchValue({

        "total1": total1,
        "total2":total2,
        "total3": String(total3),
        "tick_space1":tick_space1,
        "tick_space2":tick_space2,
         "balance_amt1": balance_amt1,
         "balance_amt2":balance_amt2,

      });
    }
    onSubmit1(): void {

      this.service.salesReceipt(this.SalesReceiptsForm.value,).subscribe((data,)=>{
        console.log(data);});
        this.router.navigate(['/grand-hyper']);
    }
    i=0;
    addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }
  back() {
    this.router.navigate(['/purchase']);
  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }
  }
