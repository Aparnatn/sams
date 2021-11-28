import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sam';

  isLoggedIn = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {

    this.isLoggedIn = this.authenticationService.isLoggedIn;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
