import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Ledger, LedgerResponse, LedgerstatementFrom } from '../user/login.interfaces';
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
    ledger_id: ["", Validators.required],

  });

  journals: LedgerStatementResponse[] = [];
  ledgerNames: LedgerResponse[] = [];

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
  }

  onSubmit(): void {
    this.service.ledgerstatement(this.LedgerStatementForm.value).subscribe((data) => {
      this.journals = data;
    });
  }

  calculateTotal(total3:number, ledgers: LedgerResponse[]) {
    let total1 = Number(total3) - Number(total3);
    let total=0;
    let total2=0;
    (ledgers || []).forEach(ledger => {
      total += Number(ledger.opening_bal);
      total2= Number(total1) + Number(total)
    });
    return Number(total2);
  }





 back() {
  this.router.navigate(['/ledgerbuttons']);
}
}


