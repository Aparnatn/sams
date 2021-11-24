import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }
  onSubmit1(): void {

    this.router.navigate(['/registration']);
  }
  onSubmit2(): void {

    this.router.navigate(['/suppliers']);
  }
  onSubmit3(): void {

    this.router.navigate(['/ledger']);
  }
  onSubmit4(): void {

    this.router.navigate(['/item']);
  }
  onSubmit5(): void {

    this.router.navigate(['/job']);
  }
  onSubmit6(): void {

    this.router.navigate(['/employee']);
  }
}
