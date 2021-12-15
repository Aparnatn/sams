import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from '../services/sales.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    receipt_number: ['', Validators.required],
    date: ['', Validators.required],
    internal_ref_no: ['', Validators.required],
    due_on: ['', Validators.required],
    credit_limit_amt: ['', Validators.required],
    user_id: ['', Validators.required],
    customer_id: ['', Validators.required],
    customerId: '',
    account:['', Validators.required],
    account_new: ['', Validators.required],
    items: this.formBuilder.array([
      this.newItemRow()
    ]),

    total1: ['', Validators.required],
    total2: ['', Validators.required],
    total3: ['', Validators.required],

    paid_amount: ['', Validators.required],

    discount: ['',],
  });
  customers: CustomerResponse[];
  itemsIndex = 0;

  itemsList: number[] = [1]
  constructor(private userService: UserService, private http: HttpClient, private router: Router, private formBuilder: FormBuilder, private service: SalesService,) { }
  items(): FormArray {
    return this.SalesReceiptsForm.get("items") as FormArray
  }

  addMoreItem() {
    this.items().push(this.newItemRow());
    this.itemsIndex++;
  }

  private newItemRow(): FormGroup {
    return this.formBuilder.group({
      si_no: [''],
      invoice_no: [''],
      invoice_date: [''],
      duedate: [''],
      invoice_amt: [''],
      received_amt: [''],

      outstanding: [''],
      discount: [''],
      balance_amt: [''],
      tick_space: [''],
      partial: [''],
    });
  }

  removeItem(i: number) {
    this.items().removeAt(i);
    this.itemsIndex--;
  }
  ngOnInit(): void {
    this.loadCustomers();

  }
  loadCustomers() {
    this.userService.getCustomer().subscribe((data: CustomerResponse[]) => {
      this.customers = data;
    })
  }
  setCustomerId(event) {
    this.SalesReceiptsForm.patchValue({customerId: this.SalesReceiptsForm.get('customer_id').value});
  }
  calcualtTotal() {
    const form = this.SalesReceiptsForm.value;
    let total1 = 0;

    this.items().controls.forEach(item => {
      let received_amt = item.get('received_amt').value;
      let outstanding = item.get('outstanding').value;
      let discount = item.get('discount').value;

      const tick_space = Number(received_amt) + Number(outstanding) - Number(discount);
      const balance_amt = Number(received_amt) + Number(outstanding) - Number(discount);

      total1 += tick_space;

      item.patchValue({ tick_space: tick_space, balance_amt: balance_amt })

    })

    const total2 = total1 - Number(form.discount);
    // const total3 = total2  - Number(form.paid_amount);
    const total3 = total2;

    this.SalesReceiptsForm.patchValue({
      total1: total1,
      total2: total2,
      total3: total3
    });
  }

  onSubmit1(): void {
    this.service.salesReceipt(this.SalesReceiptsForm.value,).subscribe((data,) => {
      console.log(data);
    });
    this.router.navigate(['/grand-hyper']);
  }
  i = 0;

  back() {
    this.router.navigate(['/sales']);
  }


}
