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
    username?: string,
    mobile_no?: string,
    password?: string,
    confirm_password?: string,
}

export class UserRegisterFormGroup extends FormGroup {
    constructor(data: UserRegister = {}) {
        super({
            username: new FormControl(data.username || '', Validators.required),
            mobile_no: new FormControl(data.mobile_no || '', Validators.required),
            password: new FormControl(data.password || '', [Validators.required, Validators.minLength(4)]),
            confirm_password: new FormControl(data.confirm_password || ''),
        });
    }

    get values(): RegisterRequest {
        return {
            username: this.value.username,
            mobile_no: this.value.mobile_no,
            password: this.value.password,
            // updated_at: this.value.confirm_password,
        }
    }

    get canBesaved(): Boolean {
        return this.dirty && this.valid;
    }
}
