import { AbstractControl, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { RegisterRequest } from '../user/login.interfaces';

// export function MatchValidator(controlName: string, matchingControlName: string) {
//   return (controls: AbstractControl) => {
//       const control = controls.controls[controlName];
//       const matchingControl = controls.controls[matchingControlName];
//       if (matchingControl.errors && !matchingControl.errors.MatchValidator) {
//           return;
//       }
//       if (control.value !== matchingControl.value) {
//           matchingControl.setErrors({ MatchValidator: true });
//       } else {
//           matchingControl.setErrors(null);
//       }
//   }
// };

type UserRegister = {
    company_id?: string|number,
    username?: string,
    mobile_no?: string,
    password?: string,
    confirm_password?: string,
}

export class UserRegisterFormGroup extends FormGroup {
    constructor(data: UserRegister = {}) {
        super({
            company_id: new FormControl(data.company_id || '', Validators.required),
            username: new FormControl(data.username || '', Validators.required),
            mobile_no: new FormControl(data.mobile_no || '', Validators.required),
            password: new FormControl(data.password || '', [Validators.required, Validators.minLength(4)]),
            confirm_password: new FormControl(data.confirm_password || ''),
        });
    }

    get values(): RegisterRequest {
        return {
            company_id: this.value.company_id,
            username: this.value.username,
            mobile_no: this.value.mobile_no,
            password: this.value.password,
        }
    }

    get canBesaved(): Boolean {
        return this.dirty && this.valid;
    }
}
