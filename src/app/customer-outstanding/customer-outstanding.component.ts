import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-outstanding',
  templateUrl: './customer-outstanding.component.html',
  styleUrls: ['./customer-outstanding.component.scss']
})
export class CustomerOutstandingComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }
  onSubmit1(): void {

    this.router.navigate(['/reports']);
  }
}
