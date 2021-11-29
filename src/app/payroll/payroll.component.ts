import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class PayrollComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['/reports']);
  }
}
