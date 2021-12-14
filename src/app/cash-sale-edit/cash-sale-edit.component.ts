import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CashSaleResponse } from '../interfaces/sales.interfaces';
import { cash, CustomerResponse, EmployeeResponse, ItemResponse, JobResponse } from '../user/login.interfaces';
import { SalesService } from '../services/sales.service';

@Component({
  selector: 'app-cash-sale-edit',
  templateUrl: './cash-sale-edit.component.html',
  styleUrls: ['./cash-sale-edit.component.scss']
})
export class CashSaleEditComponent implements OnInit {
  id: number;
  cashSaleeditForm = this.formBuilder.group({
    id: '',
    invoice_number: ['', Validators.required],
    date: ['', Validators.required],
    internal_ref_no: ['', Validators.required],
    cash: ['', Validators.required],

    user_id: ['', Validators.required],
    account: ['', Validators.required],
    customerId: '',
    customer_id: ['', Validators.required],

    items: this.formBuilder.array([
      this.newItemRow()
    ]),
    labour_charge: ['',],
    other_charge: ['',],
    total1: ['', Validators.required],
    total2: ['', Validators.required],
    total3: ['', Validators.required],
    discount: ['',],
  });

  customers: CustomerResponse[];
  cash:CashSaleResponse[];
  Items: ItemResponse[];

  jobs: JobResponse[];

  employees: EmployeeResponse[];

  // to track index of last item in cashForm.items array
  itemsIndex = 0;

  itemsList: number[] = [1]

  constructor(
    private http: HttpClient,
    private router: Router,
    private service: SalesService,
    private userService: UserService,
    private formBuilder: FormBuilder,

  ) { }

  items(): FormArray {
    return this.cashSaleeditForm.get("items") as FormArray
  }

  addMoreItem() {
    this.items().push(this.newItemRow());
    this.itemsIndex++;
  }

  private newItemRow(): FormGroup {
    return this.formBuilder.group({
      item_id: [''],
      price: [''],
      quantity: [''],
      amount: [''],
      sales_ex: [''],
      job_id: [''],
    });
  }
  removeItem(i: number) {
    this.items().removeAt(i);
    this.itemsIndex--;
  }
  setCustomerId(event) {
    this.cashSaleeditForm.patchValue({customerId: this.cashSaleeditForm.get('customer_id').value});
  }
  ngOnInit(): void {

  }
  private fetchLedger() {
    this.userService.getcash(this.id).subscribe((Cash: cash) => {
      this.cashSaleeditForm.setValue({
        id:Cash.id,
        invoice_number: Cash.invoice_number,
        date:Cash.date,
        internal_ref_no: Cash.internal_ref_no,
        cash:Cash.cash,
        user_id:Cash.user_id ,
        account:Cash.account ,

        customer_id:Cash.customer_id ,
        // customer_name:Cash.customer_name ,
        // item_id:Cash.item_id,

        // item_details:Cash.item_details,

        // price:Cash.price,
        // quantity:Cash.quantity,
        // amount: Cash.amount,
        // sales_ex:Cash.sales_ex,


        // job:Cash.job,
        labour_charge:Cash.labour_charge,
        other_charge:Cash.other_charge,
        total1:Cash.total1,
        total2:Cash.total2,
        total3:Cash.total3,

        discount:Cash.discount,

      });
    })
   }
   calcualtTotal() {
    const form = this.cashSaleeditForm.value;
    let total1 = 0;

    this.items().controls.forEach(item => {
      let amount = Number(item.get('price').value) * Number(item.get('quantity').value);
      total1 += amount;
      item.patchValue({ amount: amount })
    })

    const amount = Number(form.items.price) * Number(form.quantity);

    total1 += Number(form.labour_charge) + Number(form.other_charge);
    const total2 = total1 - Number(form.discount);
    const total3 = total2

    this.cashSaleeditForm.patchValue({
      "amount": amount,

      "total1": total1,
      "total2": String(total2),
      "total3": total3,
      "cash": total3

    });
  }
   onSubmit(): void {

     this.userService.cashedit(this.cashSaleeditForm.value,this.id).subscribe((data,)=>{
       console.log(data);});
   }
   back() {
     this.router.navigate(['/sales']);
   }
 }


