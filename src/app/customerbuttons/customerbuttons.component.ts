import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerbuttons',
  templateUrl: './customerbuttons.component.html',
  styleUrls: ['./customerbuttons.component.scss']
})
export class CustomerbuttonsComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }
  onSubmit(): void {

    this.router.navigate(['/customer']);
  }
  onSubmit1(): void {

    this.router.navigate(['/customer-outstanding']);
  }
  onSubmit2(): void {

    this.router.navigate(['/customer-invoice']);
  }
  onSubmit3(): void {

    this.router.navigate(['/customer-receipts']);
  }

  onSubmit4(): void {

    this.router.navigate(['/customer-register']);
  }
  onSubmit5(): void {

    this.router.navigate(['/customer-master']);
  }
}

