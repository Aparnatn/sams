import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }
  onSubmit(): void {

    this.router.navigate(['/cash']);
  }
  onSubmit1(): void {

    this.router.navigate(['/credit-sales']);
  }
  onSubmit2(): void {

    this.router.navigate(['/sales-return']);
  }
  onSubmit3(): void {

    this.router.navigate(['/sales-receipts']);
  }

}
