import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from '../services/sales.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CashFrom, CreditSaleRequest } from '../interfaces/sales.interfaces';
import { UserService } from '../user/user.service';
import { CustomerResponse, EmployeeResponse, ItemResponse, JobResponse } from '../user/login.interfaces';
@Component({
  selector: 'app-credit-sales',
  templateUrl: './credit-sales.component.html',
  styleUrls: ['./credit-sales.component.scss']
})
export class CreditSalesComponent implements OnInit {
  customerId = '';
  
  creditSaleForm = this.formBuilder.group({
    invoice_number: ['', Validators.required],
    date: ['', Validators.required],
    internal_ref_no: ['', Validators.required],
    credit_limit_amt: ['', Validators.required],
    due_on: ['', Validators.required],
    ledger_name: "sales_ledger",
    user_id: ['', Validators.required],
    account: ['', Validators.required],
    customerId: '',
    customer_id: ['', Validators.required],

    itemscrs: this.formBuilder.array([
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

 
  itemscrs(): FormArray {
    return this.creditSaleForm.get("itemscrs") as FormArray
  }

  addMoreItem() {
    this.itemscrs().push(this.newItemRow());
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
    this.itemscrs().removeAt(i);
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
    this.creditSaleForm.patchValue({customerId: this.creditSaleForm.get('customer_id').value});
  }
  
  calcualtTotal() {
    const form = this.creditSaleForm.value;
    let total1 = 0;

    this.itemscrs().controls.forEach(item => {
      let amount = Number(item.get('price').value) * Number(item.get('quantity').value);
      total1 += amount;
      item.patchValue({ amount: amount })
    })

    const amount = Number(form.itemscrs.price) * Number(form.quantity);

    total1 += Number(form.labour_charge) + Number(form.other_charge);
    const total2 = total1 - Number(form.discount);
    const total3 = total2

    this.creditSaleForm.patchValue({
      "amount": amount,

      "total1": total1,
      "total2": String(total2),
      "total3": total3,
      "cash": total3

    });
  }


  onSubmit(): void {



    if (this.creditSaleForm.dirty && this.creditSaleForm.valid) {
      this.service.creditSale(this.creditSaleForm.value).subscribe((data) => {
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
