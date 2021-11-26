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
    from_date: ["", Validators.required],
    to_date: ["", Validators.required],
    ledger_name: ["", Validators.required],
    period: ["", Validators.required],
  });

  Cash: CashSaleResponse[];
  PCash: PCashSaleResponse[];
  receipt: SalesReceiptResponse[];
  preceipt: PurchaseReceiptResponse[];
  credit: CreditSaleResponse[];
  pcredit: CreditPurchaseResponse[];
  Ledger: LedgerResponse[];

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
    this.service.ls(this.LedgerStatementForm.value).subscribe((data) => {
      this.Cash = data;

      console.log(data);
    });
    this.userservice.getLedgers().subscribe((data) => {
      this.Ledger = data;
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



  // this.service.lsl(this.LedgerStatementForm.value).subscribe((data)=>{
  //   this.PCash = data;
  //   console.log(data);
  // });

  //     this.service.tll(this.LedgerStatementForm.value).subscribe((data)=>{
  //       this.receipt = data;
  //       console.log(data);
  //     });

  //       this.service.tlrs(this.LedgerStatementForm.value).subscribe((data)=>{
  //         this.preceipt = data;
  //         console.log(data);
  //       });

  //         this.service.tsrl(this.LedgerStatementForm.value).subscribe((data)=>{
  //           this.credit = data;
  //           console.log(data);
  //         });

  //           this.service.trl(this.LedgerStatementForm.value).subscribe((data)=>{
  //             this.pcredit = data;
  //             console.log(data);
  //           });

}


