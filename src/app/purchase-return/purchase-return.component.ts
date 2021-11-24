import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from '../services/sales.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-purchase-return',
  templateUrl: './purchase-return.component.html',
  styleUrls: ['./purchase-return.component.scss']
})
export class PurchaseReturnComponent implements OnInit {
  PurchaseReturnForm = this.formBuilder.group({
    invoice_number: '',
    date: '',
    internal_ref_no: '',
    due_on: '',
    user_id: '',
    credit_limit_amt: '',
    supp_id: '',
    supp_name: '',
    item_id1: '',
    item_id2: '',
    item_details1: '',
    item_details2: '',
    price1_1: '',

    price1_2: '',

    quantity1:'',
    quantity2:'',

    amount1:'',
    amount2:'',
    sales_ex1:'',
    sales_ex2:'',
    job1:'',
    job2:'',
    labour_charge:'',
    other_charge:'',
    total1:'',
    total2:'',
    total3:'',
    total4:'',

    discount:'',


  });
  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:SalesService,) { }

  ngOnInit(): void {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    this.http.post("http://127.0.0.1:8004/Sam/PCreditApi", {headers: headers}).subscribe(res => {

      console.log(res);
    });
  }
  onSubmit1(): void {

    this.service.creditPurchase(this.PurchaseReturnForm.value,).subscribe((data,)=>{
      console.log(data);});
      this.router.navigate(['/grand-hyper']);
  }
}
