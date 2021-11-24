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

    this.router.navigate(['/customerbuttons']);
  }
  onSubmit2(): void {

    this.router.navigate(['/supplierbuttons']);
  }
  onSubmit3(): void {

    this.router.navigate(['/ledgerbuttons']);
  }
  onSubmit4(): void {

    this.router.navigate(['/itemjobbuttons']);
  }
  onSubmit5(): void {

    this.router.navigate(['/payroll']);
  }
  onSubmit6(): void {

    this.router.navigate(['/financial']);
  }
}
