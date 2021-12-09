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

  Cash: CashSaleResponse[];
  PCash: PCashSaleResponse[];
  receipt:SalesReceiptResponse[];
  preceipt:PurchaseReceiptResponse[];
  credit:CreditSaleResponse[];
  pcredit:CreditPurchaseResponse[];
  Ledger: LedgerResponse[] = [];

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
      this.Cash = data;

    });
    this.userservice.getLedgers().subscribe((data) => {
      this.Ledger = data;
      console.log(data);
    })
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


