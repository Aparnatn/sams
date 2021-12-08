import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Ledger, LedgerResponse, LedgerstatementFrom } from '../user/login.interfaces';
import { Observable } from 'rxjs';
import { SalesService } from '../services/sales.service';
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
    ledger_name: ["", Validators.required],
    period: ["", Validators.required],
  });

  cash: CashSaleResponse[] = [];
  cashPurchases: PCashSaleResponse[] = [];
  salesReceipts: SalesReceiptResponse[] = [];
  purchaseReceipts: PurchaseReceiptResponse[] = [];
  credits: CreditSaleResponse[] = [];
  pcredits: CreditPurchaseResponse[] = [];
  Ledgers: LedgerResponse[] = [];

  constructor(
    private http: HttpClient,
    private service: SalesService,
    private userservice: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.service.ledgerstatement(this.LedgerStatementForm.value).subscribe((data) => {
      this.cash = data;

    });
    this.userservice.getLedgers().subscribe((data) => {
      this.Ledgers = data;
      console.log(data);
    })
  }

  calculateTotal(total_1: string | number, total_2: string | number, ledgers: LedgerResponse[]) {
    let total = Number(total_1) - Number(total_2);

    (ledgers || []).forEach(ledger => {
      total += Number(ledger.opening_bal);
    });
    return total;
  }





 back() {
  this.router.navigate(['/ledgerbuttons']);
}
}


