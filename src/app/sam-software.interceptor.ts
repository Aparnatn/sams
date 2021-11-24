import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class SamFoftwareInterceptor implements HttpInterceptor {
  userToken: string;
  constructor(private http: HttpClient, private cookieService: CookieService) {
    let jwt = this.cookieService.get("userTocken");
    // console.log(jwt);
    if (typeof(jwt) !== 'undefined') {
      // console.log('ok');
      this.userToken = jwt;
    }
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = request.headers;
    if (typeof(this.userToken) !== 'undefined') {
      headers.set('Authorization', `Bearer ${this.userToken}`);
    }
    // headers.set('Authorization', `Bearer ${userToken}`);
    // headers.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    headers.set('Access-Control-Allow-Origin', '*');
    // headers.set('Access-Control-Allow-Headers', 'X-CSRFToken, Content-Type');
    // headers.set('X-CSRFToken', this.csrf);
    const modifiedReq = request.clone({
      headers: headers,
    });
    return next.handle(modifiedReq);
  }
}
