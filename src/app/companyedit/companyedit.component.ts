import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Company, UserService } from '../user/user.service';

type errorMessge = {
  company_name: string [],
  reg_no: string [],
  app_regdate: string [],
  reg_mobno: string [],
  email: string [],
  admin_usernm: string [],
  admin_password: string [],
  username: string [],
  password: string [],
  mobile: string [],
  user_access: string [],
}

@Component({
  selector: 'app-companyedit',
  templateUrl: './companyedit.component.html',
  styleUrls: ['./companyedit.component.scss']
})
export class CompanyeditComponent implements OnInit, OnDestroy {
  sub: Subscription;
  sub2: Subscription;
  item: Company;
  id: number;

  CompanyForm = this.formBuilder.group({
    id: "",
    company_name: ['', Validators.required],
    reg_no: ['', Validators.required],
    app_regdate: ['', Validators.required],
    reg_mobno: ['', Validators.required],
    email: ['', Validators.required],
    admin_usernm: ['', Validators.required],
    admin_password: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    mobile: ['', Validators.required],
    user_access: 2,
    // imag1     :"",
    // imag2       :"",
  });

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private formBuilder: FormBuilder,
    private userservice: UserService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.id = params.id;
        this.sub = this.userservice.getCompany(this.id).subscribe((company) => {
          this.CompanyForm.patchValue(company)
        });
    });
  }

  onSubmit() {
    if (this.CompanyForm.dirty && this.CompanyForm.valid) {
      this.sub2 = this.userservice.companyupdate(this.CompanyForm.value).subscribe(
        (data)=>{
          console.log(data);
          // alert('Company registred');
          // this.router.navigate(['/user-register']);
        },
        (error) => {
          this.showErros(error.error);
        }
      );
    } else {
      this.getFormValidationErrors();
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }

  getFormValidationErrors() {
    Object.keys(this.CompanyForm.controls).forEach(key => {
      const controlErrors: any = this.CompanyForm.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
         console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }

  private showErros(errors: errorMessge) {
    let msg = '';

    if (errors.company_name) {
      msg += 'Company name : ';
      errors.company_name.forEach(er => {
        msg += `${er}. `;
      });

      msg += '\n';
    }

    if (errors.reg_no) {
      msg += 'Reg no : ';
      errors.reg_no.forEach(er => {
        msg += `${er}. `;
      });
      msg += '\n';
    }

    if (errors.reg_mobno) {
      msg += 'Reg mobile no : ';
      errors.reg_mobno.forEach(er => {
        msg += `${er}. `;
      });
      msg += '\n';
    }

    if (errors.app_regdate) {
      msg += 'Date : ';
      errors.app_regdate.forEach(er => {
        msg += `${er}. `;
      });
      msg += '\n';
    }

    if (errors.email) {
      msg += 'Email : ';
      errors.email.forEach(er => {
        msg += `${er}. `;
      });
      msg += '\n';
    }

    if (errors.admin_usernm) {
      msg += 'Admin username : ';
      errors.admin_usernm.forEach(er => {
        msg += `${er}. `;
      });
      msg += '\n';
    }

    if (errors.admin_password) {
      msg += 'Admin password : ';
      errors.admin_password.forEach(er => {
        msg += `${er}. `;
      });
      msg += '\n';
    }

    if (errors.username) {
      msg += 'username : ';
      errors.username.forEach(er => {
        msg += `${er}. `;
      });
      msg += '\n';
    }

    if (errors.password) {
      msg += 'Password : ';
      errors.password.forEach(er => {
        msg += `${er}. `;
      });
      msg += '\n';
    }

    if (errors.mobile) {
      msg += 'Mobile number : ';
      errors.mobile.forEach(er => {
        msg += `${er}. `;
      });
      msg += '\n';
    }

    if (errors.user_access) {
      msg += 'User access : ';
      errors.user_access.forEach(er => {
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
