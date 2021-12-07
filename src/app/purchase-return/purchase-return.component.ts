import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from '../services/sales.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import { CustomerResponse, EmployeeResponse, ItemResponse, JobResponse, SupplierResponse } from '../user/login.interfaces';
import { CashFrom } from '../interfaces/sales.interfaces';
@Component({
  selector: 'app-purchase-return',
  templateUrl: './purchase-return.component.html',
  styleUrls: ['./purchase-return.component.scss']
})
export class PurchaseReturnComponent implements OnInit {
  supplierId = '';

  PurchaseReturnForm = this.formBuilder.group({
    invoice_number: ['', Validators.required],
    date: ['', Validators.required],
    internal_ref_no: ['', Validators.required],
    due_on: ['', Validators.required],
    
    user_id: ['', Validators.required],
    credit_limit_amt: ['', Validators.required],
    supplierId: '',
    supplier_id: ['', Validators.required],

    itemsPR: this.formBuilder.array([
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

  
  itemsPR(): FormArray {
    return this.PurchaseReturnForm.get("itemsPR") as FormArray
  }

  addMoreItem() {
    this.itemsPR().push(this.newItemRow());
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
    this.itemsPR().removeAt(i);
    this.itemsIndex--;
  }

  ngOnInit(): void { 
    this.loadSupplier();
    this.loadItems();
    this.loadJobs();
    this.loadEmployee();
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

  setSupplierId(event) {
    this.PurchaseReturnForm.patchValue({supplierId: this.PurchaseReturnForm.get('supplier_id').value});
  }

  calcualtTotal() {
    const form = this.PurchaseReturnForm.value;
    let total1 = 0;

    this.itemsPR().controls.forEach(item => {
      let amount = Number(item.get('price').value) * Number(item.get('quantity').value);
      total1 += amount;
      item.patchValue({ amount: amount })
    })

    const amount = Number(form.itemsPR.price) * Number(form.quantity);

    total1 += Number(form.labour_charge) + Number(form.other_charge);
    const total2 = total1 - Number(form.discount);
    const total3 = total2

    this.PurchaseReturnForm.patchValue({
      "amount": amount,

      "total1": total1,
      "total2": String(total2),
      "total3": total3,
      "cash": total3

    });
  }
  
  onSubmit(): void {
    if (this.PurchaseReturnForm.dirty && this.PurchaseReturnForm.valid) {
      this.service.purchaseReturn(this.PurchaseReturnForm.value).subscribe((data) => {
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
