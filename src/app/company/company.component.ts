import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { FormBuilder, Validators } from '@angular/forms';

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
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null;

  companyForm = this.formBuilder.group({
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
    private userservice: UserService,
    private router:Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.companyForm.dirty && this.companyForm.valid) {
      this.userservice.companycreate(this.companyForm.value,).subscribe(
        ()=>{
          alert('Company registred');
          this.router.navigate(['/user-register']);
        },
        (error) => {
          this.showErros(error.error);
        }
      );
    } else {
      this.getFormValidationErrors();
    }
  }

  getFormValidationErrors() {
    Object.keys(this.companyForm.controls).forEach(key => {
      const controlErrors: any = this.companyForm.get(key).errors;
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
