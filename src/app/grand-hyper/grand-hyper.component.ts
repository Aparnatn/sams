import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/login.interfaces';
import { Company, UserService } from '../user/user.service';
@Component({
  selector: 'app-grand-hyper',
  templateUrl: './grand-hyper.component.html',
  styleUrls: ['./grand-hyper.component.scss']
})
export class GrandHyperComponent implements OnInit {
  companies: Company[] = [];
  Users: User[] = [];
  constructor(private router: Router, private service: UserService,) { }

  ngOnInit(): void {
    this.loadCompanies();
    this.loadUsers();
  }
  private loadUsers() {
    this.service.getUsers().subscribe((data: User[]) => {
      this.Users = data;
    })
  }
  private loadCompanies() {
    this.service.getCompanies().subscribe((data: Company[]) => {
      this.companies = data;
    })
  }
  onSubmit1(): void {

    this.router.navigate(['/sales']);
  }
  onSubmit2(): void {

    this.router.navigate(['/journal-entry']);
  }
  onSubmit3(): void {

    this.router.navigate(['/register']);
  }
  onSubmit4(): void {

    this.router.navigate(['/reports']);
  }
  onSubmit5(): void {

    this.router.navigate(['/payroll']);
  }
  onSubmit6(): void {

    this.router.navigate(['/purchase']);
  }
}
