import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SalesService } from '../services/sales.service';
import { FormBuilder } from '@angular/forms';
import { CashFrom, CashSaleRequest } from '../interfaces/sales.interfaces';
import { CustomerResponse, ItemResponse, JobResponse } from '../user/login.interfaces';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.scss']
})
export class CashComponent implements OnInit {

  cashSaleForm = this.formBuilder.group({
    invoice_number: '',
    date: '',
    internal_ref_no: '',
    cash: '',
    ledger_name:"sales_ledger",
    user_id: '',
    account: '',
    customer_id: '',
    customer_name: '',
    item_id1: '',
    item_id2: '',
    item_desc: '',
    item_details2: '',
    price1_1: '',
    price1_2: '',
    quantity1: '',
    quantity2: '',
    amount1: '',
    amount2: '',
    sales_ex1: '',
    sales_ex2: '',
    job_name: '',
    job2: '',
    labour_charge: '',
    other_charge: '',
    total1: '',
    total2: '',
    total3: '',
    discount: '',
  });
  Customer: CustomerResponse[];
  Item:ItemResponse[];
  Job:JobResponse[];
  constructor(
    private http: HttpClient,
    private router: Router,
    private service: SalesService,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

   ngOnInit(): void {

    this.userService.getCustomer().subscribe((data: CustomerResponse[]) => {
      this.Customer = data;

      data.forEach(d => {
        this.cashSaleForm.patchValue({
          customer_name: d.customer_name,
          customer_id: d.id
        });
      });

    })
    this.userService.getItem().subscribe((data: ItemResponse[]) => {
      this.Item = data;

      data.forEach(d => {
        this.cashSaleForm.patchValue({
          item_desc: d.item_desc,
          item_id1: d.id
        });
      });

    })
    this.userService.getJob().subscribe((data: JobResponse[]) => {
      this.Job = data;

      data.forEach(d => {
        this.cashSaleForm.patchValue({
          job_name: d.job_name,
         job_id1: d.id
        });
      });

    })
   }

  calcualtTotal() {
    const form: CashFrom = this.cashSaleForm.value;

    const amount1 = Number(form.price1_1) * Number(form.quantity1);
    const amount2 = Number(form.price1_2) * Number(form.quantity2);
    const amount3 = amount1+amount2
    const total1 = amount3+Number(form.labour_charge) + Number(form.other_charge);
    const total2 = total1 - Number(form.discount);
    const total3 = total2

    this.cashSaleForm.patchValue({
      "amount1": amount1,
      "amount2": amount2,
      "total1": total1,
      "total2": String(total2),
      "total3": total3,
      "cash": total3

    });

  }

  onSubmit(): void {
    this.service.cashSale(this.cashSaleForm.value).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/grand-hyper']);

    }, (error) => {
      alert(error.error);
    });

     this.router.navigate(['/grand-hyper']);
  }
}
