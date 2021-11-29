import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from '../services/sales.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { PCashFrom, PCashSaleRequest } from '../interfaces/sales.interfaces';
import { CustomerResponse, ItemResponse, JobResponse } from '../user/login.interfaces';
import { UserService } from '../user/user.service';
@Component({
  selector: 'app-cash-purchase',
  templateUrl: './cash-purchase.component.html',
  styleUrls: ['./cash-purchase.component.scss']
})
export class CashPurchaseComponent implements OnInit {
  PCashSaleForm = this.formBuilder.group({
    invoice_number: ['',Validators.required],
    date: ['',Validators.required],
    internal_ref_no: ['',Validators.required],
    cash: ['',Validators.required],
    user_id: ['',Validators.required],
    account: ['',Validators.required],
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
  Customer: CustomerResponse[];
  Item:ItemResponse[];
  Job:JobResponse[];
  fieldArray: Array<any> = [];
  newAttribute: any = {};
  constructor(private userService: UserService,private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:SalesService,) { }
  i=0;

  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }
  ngOnInit(): void {
    this.userService.getCustomer().subscribe((data: CustomerResponse[]) => {
      this.Customer = data;

      data.forEach(d => {
        this.PCashSaleForm.patchValue({
          customer_name: d.customer_name,
          customer_id: d.id
        });
      });

    })
    this.userService.getItem().subscribe((data: ItemResponse[]) => {
      this.Item = data;

      data.forEach(d => {
        this.PCashSaleForm.patchValue({
         item_details1: d.item_details1,
          item_id1: d.id
        });
      });

    })
    this.userService.getJob().subscribe((data: JobResponse[]) => {
      this.Job = data;

      data.forEach(d => {
        this.PCashSaleForm.patchValue({
          job1: d.job1,
         job_id: d.id
        });
      });

    })
     }

    calcualtTotal() {
      const form: PCashFrom = this.PCashSaleForm.value;

      const amount1 = Number(form.price1_1) * Number(form.quantity1);
      const amount2 = Number(form.price1_2) * Number(form.quantity2);
      const amount3 = amount1+amount2
      const total1 = amount3+Number(form.labour_charge) + Number(form.other_charge);
      const total2 = total1 - Number(form.discount);
      const total3 = total2

      this.PCashSaleForm.patchValue({
        "amount1": amount1,
        "amount2": amount2,
        "total1": total1,
        "total2": String(total2),
        "total3": total3,
        "cash": total3

      });
    }
  onSubmit(): void {

    this.service.PcashSale(this.PCashSaleForm.value,).subscribe((data,)=>{
      console.log(data);});
      this.router.navigate(['/grand-hyper']);
  }
  back() {
    this.router.navigate(['/purchase']);
  }

}
