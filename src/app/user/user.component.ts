import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Users, UserService } from '../user/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { environment } from '../../environments/environment';

type errorMessge = {
  detail?: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  form = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  users: Users[] = [];
  http: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: UserService,
    private cookieService: CookieService,
  ) { }

  ngOnInit(): void {
       const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    this.http.post("http://127.0.0.1:8004/Sam/user", { headers: headers }).subscribe(res => {

      console.log(res);
    });
  }

  login(): void {
    if (this.form.dirty && this.form.valid) {
      this.service.login(this.form.value,).subscribe(
        (data) => {
          console.log(data);
          this.setUserTocken(data.userTocken);
          this.router.navigate(['/grand-hyper']);
        },
        (error: HttpErrorResponse) => {
          // console.log(error.error);
          this.showErros(error.error);
        }
      );
    }
  }

  private setUserTocken(tocken: string) {
    var now = new Date();
    now.setHours(now.getHours() + 8);
    this.cookieService.put('userTocken', tocken, {expires:now});
    this.cookieService.put('jwt', tocken, {expires:now});
    this.cookieService.put('jwt', tocken, {
      expires:now,
      domain: environment.appDomain
    });
  }

  private showErros(errors: errorMessge) {
    // console.log(errors);
    if (errors.detail) {
      alert(errors.detail);
    } else {
      alert('Somethign went wrong!! Please try agian later.');
    }
  }
}

