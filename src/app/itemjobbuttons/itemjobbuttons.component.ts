import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itemjobbuttons',
  templateUrl: './itemjobbuttons.component.html',
  styleUrls: ['./itemjobbuttons.component.scss']
})
export class ItemjobbuttonsComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.router.navigate(['/stock-balance']);
  }
  onSubmit1(): void {

    this.router.navigate(['/item-statement']);
  }
  onSubmit2(): void {

    this.router.navigate(['/stock-adjustment']);
  }
  onSubmit3(): void {

    this.router.navigate(['/stock-master-data']);
  }

  onSubmit4(): void {

    this.router.navigate(['/job-statement']);
  }
  onSubmit5(): void {

    this.router.navigate(['/job-master']);
  }
}
