import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SalesService } from '../services/sales.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CashFrom, CashSaleRequest } from '../interfaces/sales.interfaces';
import { CustomerResponse, EmployeeResponse, ItemResponse, JobResponse } from '../user/login.interfaces';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.scss']
})
export class CashComponent implements OnInit {
  customerId = '';

  cashSaleForm = this.formBuilder.group({
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
    return this.cashSaleForm.get("items") as FormArray
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

  ngOnInit(): void {
    this.loadCustomers();
    this.loadItems();
    this.loadJobs();
    this.loadEmployee();
  }

  loadCustomers() {
    this.userService.getCustomer().subscribe((data: CustomerResponse[]) => {
      this.customers = data;
    })
  }

  loadJobs() {
    this.userService.getJob().subscribe((data: JobResponse[]) => {
      this.jobs = data;
    })
  }

  loadItems() {
    this.userService.getItemss().subscribe((data: ItemResponse[]) => {
      this.Items = data;
    })
  }

  loadEmployee() {
    this.userService.getEmployees().subscribe((data: EmployeeResponse[]) => {
      this.employees = data;
    })
  }

  setCustomerId(event) {
    this.cashSaleForm.patchValue({customerId: this.cashSaleForm.get('customer_id').value});
  }

  calcualtTotal() {
    const form = this.cashSaleForm.value;
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

    this.cashSaleForm.patchValue({
      "amount": amount,

      "total1": total1,
      "total2": String(total2),
      "total3": total3,
      "cash": total3

    });
  }

  onSubmit(): void {


    if (this.cashSaleForm.dirty && this.cashSaleForm.valid) {
      this.service.cashSale(this.cashSaleForm.value).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/grand-hyper']);

      }, (error) => {
        alert(error.error);
      });
    }
  }

  back() {
    this.router.navigate(['/sales']);
  }
}
