import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllJournalResponse, CashSaleResponse, CreditPurchaseResponse, CreditSaleResponse, PCashSaleResponse, PurchaseReceiptResponse, SalesReceiptResponse } from '../interfaces/sales.interfaces';
import { ReportsService } from '../reports/reports.service';


@Component({
  selector: 'app-all-journal-entry',
  templateUrl: './all-journal-entry.component.html',
  styleUrls: ['./all-journal-entry.component.scss']
})
export class AllJournalEntryComponent {
  AllJournalEntryForm = this.formBuilder.group({
    date: "",
    report_date: "",

  });

  data: AllJournalResponse[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    private service: ReportsService,
  ) { }

  onSubmit(): void {

    this.service.getalljournal(this.AllJournalEntryForm.value).subscribe((data) => {
      this.data = data;
    });
  }

  back() {
    this.router.navigate(['/ledgerbuttons']);
  }
}
