import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from '../services/sales.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CashFrom,SalesreturnRequest } from '../interfaces/sales.interfaces';
import { CustomerResponse, EmployeeResponse, ItemResponse, JobResponse } from '../user/login.interfaces';
import { UserService } from '../user/user.service';
@Component({
  selector: 'app-sales-return',
  templateUrl: './sales-return.component.html',
  styleUrls: ['./sales-return.component.scss']
})
export class SalesReturnComponent implements OnInit {
  customerId = '';
  salesReturnForm = this.formBuilder.group({
    invoice_number: ['', Validators.required],
    date: ['', Validators.required],
    internal_ref_no: ['', Validators.required],
    user_id: ['', Validators.required],
    customerId: '',
    customer_id: ['', Validators.required],
    itemssrtn: this.formBuilder.array([
      this.newItemRow(),
    ], Validators.required),
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

  // to track index of last item in cashForm.itemssrtn array
  itemssrtnIndex = 0;

  itemssrtnList: number[] = [1]
  constructor(
    private http: HttpClient,
    private router: Router,
    private service: SalesService,
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) { }


  itemssrtn(): FormArray {
    return this.salesReturnForm.get("itemssrtn") as FormArray
  }

  addMoreItem() {
    this.itemssrtn().push(this.newItemRow());
    this.itemssrtnIndex++;
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
    this.itemssrtn().removeAt(i);
    this.itemssrtnIndex--;
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
    this.salesReturnForm.patchValue({customerId: this.salesReturnForm.get('customer_id').value});
  }

  calcualtTotal() {
    const form = this.salesReturnForm.value;
    let total1 = 0;

    this.itemssrtn().controls.forEach(item => {
      let amount = Number(item.get('price').value) * Number(item.get('quantity').value);
      total1 += amount;
      item.patchValue({ amount: amount })
    })

    const amount = Number(form.itemssrtn.price) * Number(form.quantity);

    total1 += Number(form.labour_charge) + Number(form.other_charge);
    const total2 = total1 - Number(form.discount);
    const total3 = total2

    this.salesReturnForm.patchValue({
      "amount": amount,

      "total1": total1,
      "total2": String(total2),
      "total3": total3,
      "cash": total3

    });
  }
  onSubmit(): void {
    if (this.salesReturnForm.dirty && this.salesReturnForm.valid) {
      this.service.salesReturn(this.salesReturnForm.value).subscribe((data) => {
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
