import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerResponse, Ledger, LedgerResponse, LedgerstatementFrom, SupplierResponse } from '../user/login.interfaces';
import { Observable } from 'rxjs';
import { LedgerStatementResponse, SalesService } from '../services/sales.service';
import { CashSaleResponse, CreditPurchaseResponse, CreditSaleResponse, PCashSaleResponse, PurchaseReceiptResponse, SalesReceiptResponse } from '../interfaces/sales.interfaces';
import { element } from 'protractor';
@Component({
  selector: 'app-ledger-statement',
  templateUrl: './ledger-statement.component.html',
  styleUrls: ['./ledger-statement.component.scss']
})
export class LedgerStatementComponent implements OnInit {

  LedgerStatementForm = this.formBuilder.group({
    date: ["", Validators.required],
    report_date: ["", Validators.required],
    ledger_id: "",

  });

  journals: LedgerStatementResponse[] ;
  ledgerNames: LedgerResponse[];
  cash:CashSaleResponse[]=[];
  pcash:PCashSaleResponse[]=[];
  receipt:SalesReceiptResponse[]=[];
  preceipt:PurchaseReceiptResponse[]=[];
  customers: CustomerResponse[];
  suppliers: SupplierResponse[];
  constructor(
    private http: HttpClient,
    private service: SalesService,
    private userservice: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.userservice.getLedgers().subscribe((data) => {
      this.ledgerNames = data;
    });
    this.loadCustomers();
    this.loadSupplier();

  }
  loadCustomers() {
    this.userservice.getCustomer().subscribe((data: CustomerResponse[]) => {
      this.customers = data;
    })
  }
  loadSupplier() {
    this.userservice.getSuppliers().subscribe((data: SupplierResponse[]) => {
      this.suppliers = data;
    })
  }
  onSubmit(): void {
    this.service.ledgerstatement(this.LedgerStatementForm.value).subscribe((data) => {
      this.journals = data;

    });
    // this.service.lsl(this.LedgerStatementForm.value).subscribe((data) => {
    //   this.cash = data;
    // });
  }









 back() {
  this.router.navigate(['/ledgerbuttons']);
}

}

