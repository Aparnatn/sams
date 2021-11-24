import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CashSaleResponse, CreditPurchaseResponse, CreditSaleResponse, PCashSaleResponse, PurchaseReceiptResponse, SalesReceiptResponse } from '../interfaces/sales.interfaces';
import { ReportsService } from '../reports/reports.service';


@Component({
  selector: 'app-all-journal-entry',
  templateUrl: './all-journal-entry.component.html',
  styleUrls: ['./all-journal-entry.component.scss']
})
export class AllJournalEntryComponent implements OnInit {
  AllJournalEntryForm = this.formBuilder.group({
    date:"",
    report_date:"",

   });

   Cash: CashSaleResponse[];
   PCash: PCashSaleResponse[];
   receipt:SalesReceiptResponse[];
   preceipt:PurchaseReceiptResponse[];
   credit:CreditSaleResponse[];
   pcredit:CreditPurchaseResponse[];




  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    this.service.chs({}).subscribe((data) => {
      this.Cash = data;
      console.log(data);
    })
  }
  onSubmit(): void {

    this.service.chs(this.AllJournalEntryForm.value).subscribe((data,)=>{
      this.Cash = data;
      console.log(data);
    });

    this.service.pchs(this.AllJournalEntryForm.value).subscribe((data,)=>{
      this.PCash = data;
      console.log(data);
    });

      this.service.rs(this.AllJournalEntryForm.value).subscribe((data,)=>{
        this.receipt = data;
        console.log(data);
      });

        this.service.rp(this.AllJournalEntryForm.value).subscribe((data,)=>{
          this.preceipt = data;
          console.log(data);
        });

          this.service.crs(this.AllJournalEntryForm.value).subscribe((data,)=>{
            this.credit = data;
            console.log(data);
          });

            this.service.crp(this.AllJournalEntryForm.value).subscribe((data,)=>{
              this.pcredit = data;
              console.log(data);
            });

  }

}
