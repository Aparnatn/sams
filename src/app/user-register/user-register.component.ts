import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company, UserService } from '../user/user.service';
import { UserRegisterFormGroup } from './user-register.form';
import { HttpErrorResponse } from '@angular/common/http';

type errorMessge = {
  username?: string[],
  password?: string[],
  mobile_no?: string[],
}

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
  form: UserRegisterFormGroup = new UserRegisterFormGroup({});

  get passwordMatch(): boolean {
    const password = this.form.get('password').value;
    const confirmPassword = this.form.get('confirm_password').value;

    return password === confirmPassword;
  }

  get canSaved(): boolean {
    return this.form.canBesaved && this.passwordMatch;
  }

  get isPasswordInvalid(): boolean {
    return (this.form.get('password').touched
      || (
        this.form.get('password').dirty
        && this.form.get('password').invalid
      )
    ) && (
        this.form.get('password').hasError('required')
        || this.form.get('password').hasError('minlength')
      );
  }

  companyId: string;

  companies: Company[] = [];

  constructor(
    private router: Router,
    private service: UserService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.companyId = params.companyId;
      this.form.patchValue({company_id: this.companyId})
    });
    // this.loadCompanies();
  }

  private loadCompanies() {
    this.service.getCompanies().subscribe((data: Company[]) => {
      this.companies = data;
    })
  }

  onSubmit(): void {
    if (this.form.canBesaved) {
      this.service.register(this.form.values).subscribe(
        () => {
          alert('Regiistred user successfully');
          this.router.navigate(['/login']);
        },
        (error: HttpErrorResponse) => {
          // console.log(error);
          this.showErros(error.error);
        }
      );
    } else {
      this.getFormValidationErrors();
    }

  }

  private getFormValidationErrors() {
    Object.keys(this.form.controls).forEach(key => {
      console.log(key);
      const controlErrors: any = this.form.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }

  private showErros(errors: errorMessge) {
    let msg = '';

    if (errors.username) {
      msg += 'Username : ';
      errors.username.forEach(er => {
        msg += `${er}. `;
      });

      msg += '\n';
    }

    if (errors.password) {
      msg += 'Password : ';
      errors.username.forEach(er => {
        msg += `${er}. `;
      });
      msg += '\n';
    }

    if (errors.mobile_no) {
      msg += 'Mobile : ';
      errors.username.forEach(er => {
        msg += `${er}. `;
      });
      msg += '\n';
    }

    if (msg != '') {
      alert(msg)
    } else {
      alert('Somethign went wrong!! Please try agian later.');
    }
  }

}

