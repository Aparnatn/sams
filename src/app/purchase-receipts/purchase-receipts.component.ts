import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ReceiptFrom, PurchaseReceiptRequest } from '../interfaces/sales.interfaces';
import { SalesService } from '../services/sales.service';
@Component({
  selector: 'app-purchase-receipts',
  templateUrl: './purchase-receipts.component.html',
  styleUrls: ['./purchase-receipts.component.scss']
})
export class PurchaseReceiptsComponent implements OnInit {
 PurchaseReceiptsForm = this.formBuilder.group({
  receipt_number:'',
  date:'',
  internal_ref_no:'',
  due_on:'',
  credit_limit_amt:'',
  user_id:'',
  supp_id:'',
  supp_name:'',
  si_no1:'',
  si_no2:'',
  
  invoice_no1:'',
  invoice_no2:'',

  invoice_date1:'',
  invoice_date2:'',

  duedate1:'',
  duedate2:'',

  invoice_amt1:'',
  invoice_amt2:'',

  received_amt1:'',
  received_amt2:'',
  paid_amount:'',
  outstanding1:'',
  outstanding2:'',

  discount1:'',
  discount2:'',

  balance_amt1:'',
  balance_amt2:'',

  tick_space1:'',
  tick_space2:'',

  partial1:'',
  partial2:'',

  total1:'',
  total2:'',
  total3:'',


  account:'',
  discount:'',
});
  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:SalesService,) { }

  ngOnInit(): void {
    // const headers = new Headers();
    // headers.append('Access-Control-Allow-Headers', 'Content-Type');
    // headers.append('Access-Control-Allow-Methods', 'GET');
    // headers.append('Access-Control-Allow-Origin', '*');
    // this.http.post("http://127.0.0.1:8004/PReceiptApi", {headers: headers}).subscribe(res => {

    //   console.log(res);
    // });
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
}
