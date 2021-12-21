import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReceiptFrom, PurchaseReceiptRequest } from '../interfaces/sales.interfaces';
import { SalesService } from '../services/sales.service';
import { UserService } from '../user/user.service';
import { CustomerResponse, LedgerResponse, SupplierResponse } from '../user/login.interfaces';
@Component({
  selector: 'app-purchase-receipts',
  templateUrl: './purchase-receipts.component.html',
  styleUrls: ['./purchase-receipts.component.scss']
})
export class PurchaseReceiptsComponent implements OnInit {
 PurchaseReceiptsForm = this.formBuilder.group({
  receipt_number:['',Validators.required],
  date:['',Validators.required],
  internal_ref_no:['',Validators.required],
  due_on:['',Validators.required],
  credit_limit_amt:['',Validators.required],
  user_id:['',Validators.required],
  supplier_id:['',Validators.required],
  supplierId: '',
  account:['',Validators.required],
  account_new: ['', Validators.required],
  items: this.formBuilder.array([
    this.newItemRow()
  ]),
  total1:['',Validators.required],
  total2:['',Validators.required],
  total3:['',Validators.required],

  discount:[''],
  paid_amount: ['', Validators.required],
});
suppliers: SupplierResponse[];
itemsIndex = 0;
ledger: LedgerResponse[];
itemsList: number[] = [1]
  constructor(private userService: UserService,private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:SalesService,) { }
  items(): FormArray {
    return this.PurchaseReceiptsForm.get("items") as FormArray
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
  ngOnInit(): void {
    this.loadSuppliers();
    this.loadledgers();
  }
  loadSuppliers() {
    this.userService.getSuppliers().subscribe((data: SupplierResponse[]) => {
      this.suppliers = data;
    })
  }
  loadledgers() {
    this.userService.getLedgers().subscribe((data: LedgerResponse[]) => {
      this.ledger = data;
    })
  }

  setSupplierId(event) {
    this.PurchaseReceiptsForm.patchValue({supplierId: this.PurchaseReceiptsForm.get('supplier_id').value});
  }
  calcualtTotal() {
    const form = this.PurchaseReceiptsForm.value;
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

    this.PurchaseReceiptsForm.patchValue({
      total1: total1,
      total2: total2,
      total3: total3
    });
  }
  onSubmit1(): void {

    this.service.purchaseReceipt(this.PurchaseReceiptsForm.value,).subscribe((data,)=>{
      console.log(data);});
      this.router.navigate(['/grand-hyper']);
  }
  removeItem(i: number) {
    this.items().removeAt(i);
    this.itemsIndex--;
  }
i=0;
back() {
  this.router.navigate(['/purchase']);
}


}
