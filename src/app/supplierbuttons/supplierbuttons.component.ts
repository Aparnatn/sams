import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplierbuttons',
  templateUrl: './supplierbuttons.component.html',
  styleUrls: ['./supplierbuttons.component.scss']
})
export class SupplierbuttonsComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }
  onSubmit(): void {

    this.router.navigate(['/supplier-statement']);
  }
  onSubmit1(): void {

    this.router.navigate(['/supplier-outstand']);
  }
  onSubmit2(): void {

    this.router.navigate(['/supplier-invoice']);
  }
  onSubmit3(): void {

    this.router.navigate(['/payment-history']);
  }

  onSubmit4(): void {

    this.router.navigate(['/supplier-invo-receipt']);
  }
  onSubmit5(): void {

    this.router.navigate(['/supplier-master-data']);
  }

  back() {
    this.router.navigate(['/reports']);
  }
}

