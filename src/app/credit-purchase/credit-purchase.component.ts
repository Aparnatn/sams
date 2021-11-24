import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from '../services/sales.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { CashFrom, CreditPurchaseRequest } from '../interfaces/sales.interfaces';
@Component({
  selector: 'app-credit-purchase',
  templateUrl: './credit-purchase.component.html',
  styleUrls: ['./credit-purchase.component.scss']
})
export class CreditPurchaseComponent implements OnInit {
  CreditPurchaseForm = this.formBuilder.group({
    invoice_number: ['',Validators.required],
    date: ['',Validators.required],
    internal_ref_no: ['',Validators.required],
    cash: ['',Validators.required],
    user_id: ['',Validators.required],
    due_on:"",
    credit_limit_amt:['',Validators.required],
    account:['',Validators.required],
    supp_id: ['',Validators.required],
    supp_name: ['',Validators.required],
    item_id1: ['',Validators.required],
    item_id2: ['',Validators.required],
    item_details1: ['',Validators.required],
    item_details2: ['',Validators.required],
    price1_1: ['',Validators.required],
    price1_2: ['',Validators.required],
    quantity1: ['',Validators.required],
    quantity2: ['',Validators.required],
    amount1: ['',Validators.required],
    amount2: ['',Validators.required],
    sales_ex1: ['',Validators.required],
    sales_ex2: ['',Validators.required],
    job1: ['',Validators.required],
    job2: ['',Validators.required],
    labour_charge: ['',Validators.required],
    other_charge: ['',Validators.required],
    total1: ['',Validators.required],
    total2: ['',Validators.required],
    total3: ['',Validators.required],
    discount: ['',Validators.required],

  });
  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:SalesService,) { }

  ngOnInit(): void {
    //   const headers = new Headers();
    //   headers.append('Access-Control-Allow-Headers', 'Content-Type');
    //   headers.append('Access-Control-Allow-Methods', 'GET');
    //   headers.append('Access-Control-Allow-Origin', '*');
    //   this.http.post("http://127.0.0.1:8004/Sam/cashapi", { headers: headers }).subscribe(res => {

    //     console.log(res);
    //   });
     }

    calcualtTotal() {
      const form: CashFrom = this.CreditPurchaseForm.value;

      const amount1 = Number(form.price1_1) * Number(form.quantity1);
      const amount2 = Number(form.price1_2) * Number(form.quantity2);
      const amount3 = amount1+amount2
      const total1 = amount3+Number(form.labour_charge) + Number(form.other_charge);
      const total2 = total1 - Number(form.discount);
      const total3 = total2

      this.CreditPurchaseForm.patchValue({
        "amount1": amount1,
        "amount2": amount2,
        "total1": total1,
        "total2": String(total2),
        "total3": total3,
        "cash": total3

      });
    }
  onSubmit(): void {

    this.service.creditPurchase(this.CreditPurchaseForm.value,).subscribe((data,)=>{
      console.log(data);});
      this.router.navigate(['/grand-hyper']);
  }
  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
}

deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
}
}
