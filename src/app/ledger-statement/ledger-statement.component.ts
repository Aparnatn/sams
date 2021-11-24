import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Ledger } from '../user/login.interfaces';
import { Observable } from 'rxjs';
import { SalesService } from '../services/sales.service';
import { CashSaleResponse, CreditPurchaseResponse, CreditSaleResponse, PCashSaleResponse, PurchaseReceiptResponse, SalesReceiptResponse } from '../interfaces/sales.interfaces';
@Component({
  selector: 'app-ledger-statement',
  templateUrl: './ledger-statement.component.html',
  styleUrls: ['./ledger-statement.component.scss']
})
export class LedgerStatementComponent implements OnInit {

  LedgerStatementForm = this.formBuilder.group({
    from_date:"",
    to_date: "",
    ledger_name:"",
    period: "",
  });

  Cash: CashSaleResponse[];
  PCash: PCashSaleResponse[];
  receipt:SalesReceiptResponse[];
  preceipt:PurchaseReceiptResponse[];
  credit:CreditSaleResponse[];
  pcredit:CreditPurchaseResponse[];

  constructor(
    private http:HttpClient,
    private service: SalesService,
    private userservice: UserService,
    private router:Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.service.ls({}).subscribe((data) => {
      this.Cash = data;
      console.log(data);
    })
  }

  onSubmit(): void {
    this.service.ls(this.LedgerStatementForm.value).subscribe((data,)=>{
      this.Cash = data;
      console.log(data);
    });

    this.service.lsl(this.LedgerStatementForm.value).subscribe((data,)=>{
      this.PCash = data;
      console.log(data);
    });

      this.service.tll(this.LedgerStatementForm.value).subscribe((data,)=>{
        this.receipt = data;
        console.log(data);
      });

        this.service.tlrs(this.LedgerStatementForm.value).subscribe((data,)=>{
          this.preceipt = data;
          console.log(data);
        });

          this.service.tsrl(this.LedgerStatementForm.value).subscribe((data,)=>{
            this.credit = data;
            console.log(data);
          });

            this.service.trl(this.LedgerStatementForm.value).subscribe((data,)=>{
              this.pcredit = data;
              console.log(data);
            });

  }
}


