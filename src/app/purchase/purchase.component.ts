import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }
  onSubmit(): void {

    this.router.navigate(['/cash-purchase']);
  }
  onSubmit1(): void {

    this.router.navigate(['/credit-purchase']);
  }
  onSubmit2(): void {

    this.router.navigate(['/purchase-return']);
  }
  onSubmit3(): void {

    this.router.navigate(['/purchase-receipts']);
  }
  back() {
    this.router.navigate(['/grand-hyper']);
  }
}
