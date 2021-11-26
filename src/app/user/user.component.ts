import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService, User } from '../auth/authentication.service';

type errorMessge = {
  detail?: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  returnUrl: string;

  form = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private service: AuthenticationService,
  ) {
    // redirect to company page if user alredy logged in
    if (this.service.isLoggedIn) {
      this.router.navigate(['/grand-hyper']);
    }
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/grand-hyper';
  }

  login(): void {
    if (this.form.dirty && this.form.valid) {
      this.service.login(this.form.value.username, this.form.value.password).subscribe(
        (user: User) => {
          console.log(user);
          this.router.navigate([this.returnUrl]);
        },
        (error: HttpErrorResponse) => {
          // console.log(error.error);
          this.showErros(error.error);
        }
      );
    }
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

