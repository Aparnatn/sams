import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ledgerbuttons',
  templateUrl: './ledgerbuttons.component.html',
  styleUrls: ['./ledgerbuttons.component.scss']
})
export class LedgerbuttonsComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }


  onSubmit(): void {

    this.router.navigate(['/ledger-statement']);
  }
  onSubmit1(): void {

    this.router.navigate(['/all-journal-entry']);
  }
  onSubmit2(): void {

    this.router.navigate(['/ledger-masterdata']);
  }
  // onSubmit3(): void {

  //   this.router.navigate(['/purchase-receipts']);
  // }

  back() {
    this.router.navigate(['/reports']);
  }
}

