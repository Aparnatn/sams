import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }
  onSubmit1(): void {

    this.router.navigate(['/customer']);
  }
  onSubmit2(): void {

    this.router.navigate(['/supplier-outstand']);
  }
  onSubmit3(): void {

    this.router.navigate(['/ledger-statement']);
  }
  onSubmit4(): void {

    this.router.navigate(['/stock-adjustment']);
  }
  onSubmit5(): void {

    this.router.navigate(['/payroll']);
  }
  onSubmit6(): void {

    this.router.navigate(['/financial']);
  }
}
