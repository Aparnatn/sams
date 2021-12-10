import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SalesService } from '../services/sales.service';
import { LedgerResponse } from '../user/login.interfaces';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-manual-journal',
  templateUrl: './manual-journal.component.html',
  styleUrls: ['./manual-journal.component.scss']
})
export class ManualJournalComponent implements OnInit {
  ManualJournalForm = this.formBuilder.group({
    debtotal: ['', Validators.required],
    cretotal: ['', Validators.required],
    debit_ledgers: this.formBuilder.array([
      this.debitLedgerRow()
    ]),
    credit_ledgers: this.formBuilder.array([
      this.creditLedgerRow()
    ]),
  });



  itemsList: number[] = [1]
  Ledger: LedgerResponse[];

  constructor(
    private http: HttpClient,
    private router: Router,
    private service: SalesService,
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loadLedgers();
  }

  debitLedgers(): FormArray {
    return this.ManualJournalForm.get("debit_ledgers") as FormArray
  }

  creditLedgers(): FormArray {
    return this.ManualJournalForm.get("credit_ledgers") as FormArray
  }

  addDebitLedgerRow() {
    this.debitLedgers().push(this.debitLedgerRow());
  }

  removeDebitLedger(i: number) {
    this.debitLedgers().removeAt(i);
  }

  private debitLedgerRow(): FormGroup {
    return this.formBuilder.group({
      debitledg: ['',],
      debitamnt2: ['',],
    });
  }

  addCreditLedgerRow() {
    this.creditLedgers().push(this.creditLedgerRow());
  }

  removeCreditLedger(i: number) {
    this.creditLedgers().removeAt(i);
  }

  private creditLedgerRow(): FormGroup {
    return this.formBuilder.group({
      creditledg: ['',],
      creditamnt2: ['',],
    });
  }

  loadLedgers() {
    this.userService.getLedgers().subscribe((data: LedgerResponse[]) => {
      this.Ledger = data;
    })
  }

  calcualtTotal() {
    const form = this.ManualJournalForm.value;
    let debtotal = 0;
    let cretotal = 0;
    this.debitLedgers().controls.forEach(item => {

      debtotal += Number(item.get('debitamnt2').value);
      item.patchValue({ debtotal: debtotal })
    })
    this.creditLedgers().controls.forEach(item => {

      cretotal += Number(item.get('creditamnt2').value);
      item.patchValue({ cretotal: cretotal })
    })


    this.ManualJournalForm.patchValue({

      "debtotal": debtotal,
      "cretotal": cretotal
    });

  }

  onSubmit(): void {
    this.service.manualjournal(this.ManualJournalForm.value,).subscribe((data,) => {
      console.log(data);
    });
    this.router.navigate(['/grand-hyper']);
  }
  back() {
    this.router.navigate(['/journal-entry']);
  }
}
