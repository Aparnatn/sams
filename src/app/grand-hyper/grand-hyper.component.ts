import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, User } from '../auth/authentication.service';
import { Company, UserService } from '../user/user.service';

@Component({
  selector: 'app-grand-hyper',
  templateUrl: './grand-hyper.component.html',
  styleUrls: ['./grand-hyper.component.scss']
})
export class GrandHyperComponent implements OnInit {
  companies: Company[] = [];
  user: User;

  constructor(
    private router: Router,
    private service: UserService,
    private authService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.user = this.authService.user;
    this.loadCompanies();
    // this.loadUsers();
  }

  // private loadUsers() {
  //   this.service.getUser().subscribe((data: User) => {
  //     this.User = data;
  //   })
  // }

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
