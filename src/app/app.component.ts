import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, User } from './auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sam';

  isLoggedIn = false;

  user: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.authenticationService.getLoggedInstatus().subscribe(status => {
      this.isLoggedIn = status;
    });

    this.authenticationService.getLoggedInuser().subscribe((user: User) => {
      this.user = user;
    })
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
