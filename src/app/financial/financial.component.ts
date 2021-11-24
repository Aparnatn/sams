import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss']
})
export class FinancialComponent implements OnInit {

  constructor(private router:Router,) { }


  ngOnInit(): void {
  }
  onSubmit1(): void {

    this.router.navigate(['/sales']);
  }
  onSubmit2(): void {

    this.router.navigate(['/profit-loss']);
  }


  onSubmit5(): void {

    this.router.navigate(['/balance-sheet']);
  }
  onSubmit6(): void {

    this.router.navigate(['/trial-balance']);
  }
}


