import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerResponse, Ledger, LedgerStatementResponse } from '../user/login.interfaces';
import { Observable } from 'rxjs';
import { SalesService } from '../services/sales.service';
import { BSFrom, CashFrom, CashSaleResponse, CreditPurchaseResponse, CreditSaleResponse, ManualJournalResponse, PCashFrom, PCashSaleResponse, PurchaseReceiptResponse, SalesReceiptResponse } from '../interfaces/sales.interfaces';

@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.scss']
})
export class BalanceSheetComponent implements OnInit {
  BsForm = this.formBuilder.group({
    date: ["", Validators.required],
    report_date: ["", Validators.required],

  });
  journals: ManualJournalResponse[] ;
  ledgers: LedgerStatementResponse[];
  cash: CashSaleResponse[]=[];
  Pcash:PCashSaleResponse[];
  customers:CustomerResponse[]=[];
  creditPurchases:CreditPurchaseResponse[];

  cashPurchases: PCashSaleResponse[];
  salesReceipts: SalesReceiptResponse[];
  purchaseReceipts: PurchaseReceiptResponse[];
  credits:CreditSaleResponse[];
  pcredits:CreditPurchaseResponse[];
  PReceiptTot = 0;
  PCashTot = 0;
  PCreditTot = 0;
  CreditTot = 0;
  ReceiptTot = 0;
  CashTot = 0;
  PCashTotal = 0;
  creditors_tot =0;
  debitors_tot =0;
  PReceiptTotal=0;
  PcashTo=0;

  constructor(
    private http: HttpClient,
    private salesservice: SalesService,
    private userservice: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {

    this.salesservice.getTrialB(this.BsForm.value).subscribe((data) => {
      this.ledgers = data.ledgers;
      this.cash = data.cash;
      this.cashPurchases = data.cashPurchases;
      this.salesReceipts = data.salesReciepts;
      this.purchaseReceipts = data.purchaseReciepts;
      this.credits = data.credits;
       this.creditPurchases = data.creditPurchases;
      this.pcredits = data.pcredits;
      this.PReceiptTot = 0;
      this.PCashTot = 0;
      this.PCreditTot = 0;
      this.CreditTot = 0;
      this.ReceiptTot = 0;
      this.CashTot = 0;
      this.PCashTotal = 0;
      this.creditors_tot =0;
      this.debitors_tot =0;
this.PcashTo=0;

      this.purchaseReceipts.forEach(element => {
        this.PCashTot += Number(element.total3);
      });
      this.cashPurchases.forEach(element => {
        this.PcashTo= Number(element.total3);
      });
      this.purchaseReceipts.forEach(element => {
        this.PReceiptTot += Number(element.total3);
      });
      this.cashPurchases.forEach(element => {
        this.PCashTot += Number(element.total3);
      });
      this.cashPurchases.forEach(element => {
        this.PCashTotal += Number(element.total3);
      });
      this.pcredits.forEach(element => {
        this.PCashTotal += Number(element.total3);
      });
      this.cash.forEach(element => {
        this.PCashTot += Number(element.total3);
      });
      this.salesReceipts.forEach(element => {
        this.PCashTot += Number(element.total3);
      });
      this.pcredits.forEach(element => {
        this.PCreditTot += Number(element.total3);
      });
      this.credits.forEach(element => {
        this.CreditTot += Number(element.total3);
      });
      this.salesReceipts.forEach(element => {
        this.ReceiptTot += Number(element.total3);
      });
      this.cash.forEach(element => {
        this.CashTot += Number(element.total3);
      });
      this.credits.forEach(element => {
        this.CashTot += Number(element.total3);
      });

      this.creditors_tot = this.CreditTot + this.PCashTot;
      this.debitors_tot = this.PCreditTot + this.PReceiptTot+this.PcashTo;
    });


  }

    loadCustomers(){
      this.userservice.getCustomer().subscribe((data:CustomerResponse[])=>{
        this.customers = data;
      })
    }

  back() {
    this.router.navigate(['/financial']);
  }

}
