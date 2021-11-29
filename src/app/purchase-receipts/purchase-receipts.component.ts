import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ReceiptFrom, PurchaseReceiptRequest } from '../interfaces/sales.interfaces';
import { SalesService } from '../services/sales.service';
import { UserService } from '../user/user.service';
import { CustomerResponse } from '../user/login.interfaces';
@Component({
  selector: 'app-purchase-receipts',
  templateUrl: './purchase-receipts.component.html',
  styleUrls: ['./purchase-receipts.component.scss']
})
export class PurchaseReceiptsComponent implements OnInit {
 PurchaseReceiptsForm = this.formBuilder.group({
  receipt_number:['',Validators.required],
  date:['',Validators.required],
  internal_ref_no:['',Validators.required],
  due_on:['',Validators.required],
  credit_limit_amt:['',Validators.required],
  user_id:['',Validators.required],
  supp_id:['',Validators.required],
  supp_name:['',Validators.required],
  si_no1:['',Validators.required],
  si_no2:['',Validators.required],

  invoice_no1:['',Validators.required],
  invoice_no2:['',Validators.required],

  invoice_date1:['',Validators.required],
  invoice_date2:['',Validators.required],

  duedate1:['',Validators.required],
  duedate2:['',Validators.required],

  invoice_amt1:['',Validators.required],
  invoice_amt2:['',Validators.required],

  received_amt1:['',Validators.required],
  received_amt2:['',Validators.required],
  paid_amount:['',Validators.required],
  outstanding1:['',Validators.required],
  outstanding2:['',Validators.required],

  discount1:['',Validators.required],
  discount2:['',Validators.required],

  balance_amt1:['',Validators.required],
  balance_amt2:['',Validators.required],

  tick_space1:['',Validators.required],
  tick_space2:['',Validators.required],

  partial1:['',Validators.required],
  partial2:['',Validators.required],

  total1:['',Validators.required],
  total2:['',Validators.required],
  total3:['',Validators.required],


  account:['',Validators.required],
  discount:['',Validators.required],
});
 fieldArray: Array<any> = [];
             newAttribute: any = {};
            Customer: CustomerResponse[];
  constructor(private userService: UserService,private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:SalesService,) { }

  ngOnInit(): void {
    this.userService.getCustomer().subscribe((data: CustomerResponse[]) => {
      this.Customer = data;

      data.forEach(d => {
        this.PurchaseReceiptsForm.patchValue({
          customer_name: d.customer_name,
          customer_id: d.id
        });
      });

    })
  }
  calcualtTotal() {
    const form: ReceiptFrom = this.PurchaseReceiptsForm.value;

    const tick_space1 =  Number(form.received_amt1)+ Number(form.outstanding1)-Number(form.discount1);
    const balance_amt1= Number(form.received_amt1)+ Number(form.outstanding1)-Number(form.discount1);
    const tick_space2 =   Number(form.received_amt2)+ Number(form.outstanding2)-Number(form.discount2);
    const balance_amt2=   Number(form.received_amt2)+Number(form.outstanding2)-Number(form.discount2);
    const total1 = tick_space1+tick_space2;
    const total2 = tick_space1+tick_space2-Number(form.discount);
    const total3 = tick_space1+tick_space2-Number(form.discount);


    this.PurchaseReceiptsForm.patchValue({

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

    this.service.purchaseReceipt(this.PurchaseReceiptsForm.value,).subscribe((data,)=>{
      console.log(data);});
      this.router.navigate(['/grand-hyper']);
  }
  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
}
i=0;
back() {
  this.router.navigate(['/purchase']);
}

deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
}
}
