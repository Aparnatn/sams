import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from '../services/sales.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PCashFrom, PCashSaleRequest } from '../interfaces/sales.interfaces';
import {  EmployeeResponse, ItemResponse, JobResponse, LedgerResponse, SupplierResponse } from '../user/login.interfaces';
import { UserService } from '../user/user.service';
@Component({
  selector: 'app-cash-purchase',
  templateUrl: './cash-purchase.component.html',
  styleUrls: ['./cash-purchase.component.scss']
})
export class CashPurchaseComponent implements OnInit {
  supplierId = '';

  PCashSaleForm = this.formBuilder.group({

    invoice_number: ['', Validators.required],
    date: ['', Validators.required],
    internal_ref_no: ['', Validators.required],
    cash: ['', Validators.required],

    user_id: ['', Validators.required],
    account: ['', Validators.required],
    account_new: ['', Validators.required],
    supplierId: '',
    supplier_id: ['', Validators.required],

    itemsCP: this.formBuilder.array([
      this.newItemRow()
    ]),
    labour_charge: ['',],
    other_charge: ['',],
    total1: ['', Validators.required],
    total2: ['', Validators.required],
    total3: ['', Validators.required],
    discount: ['',],


  });


  suppliers: SupplierResponse[];

  Items: ItemResponse[];

  jobs: JobResponse[];

  employees: EmployeeResponse[];
  ledger: LedgerResponse[];
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

  itemsCP(): FormArray {
    return this.PCashSaleForm.get("itemsCP") as FormArray
  }

  addMoreItem() {
    this.itemsCP().push(this.newItemRow());
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
    this.itemsCP().removeAt(i);
    this.itemsIndex--;
  }


  ngOnInit(): void {
    this.loadSupplier();
    this.loadItems();
    this.loadJobs();
    this.loadEmployee();
    this.loadledgers();
   }

   loadSupplier() {
    this.userService.getSuppliers().subscribe((data: SupplierResponse[]) => {
      this.suppliers = data;
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
  loadledgers() {
    this.userService.getLedgers().subscribe((data: LedgerResponse[]) => {
      this.ledger = data;
    })
  }
  setSupplierId(event) {
    this.PCashSaleForm.patchValue({supplierId: this.PCashSaleForm.get('supplier_id').value});
  }

  calcualtTotal() {
    const form = this.PCashSaleForm.value;
    let total1 = 0;

    this.itemsCP().controls.forEach(item => {
      let amount = Number(item.get('price').value) * Number(item.get('quantity').value);
      total1 += amount;
      item.patchValue({ amount: amount })
    })

    const amount = Number(form.itemsCP.price) * Number(form.quantity);

    total1 += Number(form.labour_charge) + Number(form.other_charge);
    const total2 = total1 - Number(form.discount);
    const total3 = total2

    this.PCashSaleForm.patchValue({
      "amount": amount,

      "total1": total1,
      "total2": String(total2),
      "total3": total3,
      "cash": total3

    });
  }



  onSubmit(): void {
    if (this.PCashSaleForm.dirty && this.PCashSaleForm.valid) {
      this.service.PcashSale(this.PCashSaleForm.value).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/grand-hyper']);

      }, (error) => {
        alert(error.error);
      });
    }

  }

  back() {
    this.router.navigate(['/purchase']);
  }

}
