import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.token;
    let setHeaders: {
        [name: string]: string | string[];
    };
    if (token !== null) {
      setHeaders = {
        Authorization: `Bearer ${token}`,
        // AuthToken: token,
      }
    }
    // headers.set('Authorization', `Bearer ${this.userToken}`);
    // headers.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    // headers.set('Access-Control-Allow-Origin', '*');
    // headers.set('Access-Control-Allow-Credentials', 'true');
    // headers.set('Access-Control-Allow-Headers', 'X-CSRFToken, Content-Type');
    // headers.set('X-CSRFToken', this.csrf);

    return next.handle(request.clone({
      setHeaders: setHeaders
    }));
  }
}
