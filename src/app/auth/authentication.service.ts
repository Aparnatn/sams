import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of, scheduled, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

export interface User {
  name: string,
  companyName?: string
}

export interface LoginResponse {
  id: number,
  userToken: string,
  user: User,
}

@Injectable()
export class AuthenticationService {
  private apiUrl: string;

  private loggedInStatusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private authTokenSubject: BehaviorSubject<string|null> = new BehaviorSubject<string|null>(null);

  private currentUser: BehaviorSubject<User|null> = new BehaviorSubject<User|null>(null);

  get user(): User|null {
    return this.currentUser.value
  }

  get isLoggedIn(): boolean {
    return this.loggedInStatusSubject.value
  }

  get token(): string|null {
    return this.authTokenSubject.value;
  }

  constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = environment.apiUrl + '/Sam';
    const token = this.getAuthToken();

    this.loggedInStatusSubject = new BehaviorSubject<boolean>(
      (token !== null) ? true : false
    );
    this.authTokenSubject.next(token);
    this.currentUser.next(this.getCurrentUser());
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { username, password }, {
      // observe: 'response',
      // withCredentials: true
    }).pipe(map((response: LoginResponse) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('userToken', response.userToken);
      localStorage.setItem('currentUser', JSON.stringify(response.user));

      this.loggedInStatusSubject.next(true);
      this.authTokenSubject.next(response.userToken);
      this.currentUser.next(response.user);

      return response.user;
    }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('userToken');
    localStorage.removeItem('currentUser');

    this.loggedInStatusSubject.next(false);
    this.authTokenSubject.next(null);
    this.currentUser.next(null);

    location.reload();
  }

  getLoggedInStatus(): boolean {
    return this.getAuthToken() !== null ? true : false;
  }

  getCurrentUser(): User|null {
    const user = localStorage.getItem('currentUser');
    return (user !== null) ? JSON.parse(user) : null;
  }

  getAuthToken(): string|null {
    return localStorage.getItem('userToken');
  }
}
