import { Router } from '@angular/router';
import { NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              config: NgbTooltipConfig,
              private snackBar: MatSnackBar)
               {
                config.placement = 'right';
                config.triggers = 'hover';
               }

  register() {
    // console.log(this.registrationForm);
    if (this.registrationForm.valid) {
      this.authService.newUser(this.registrationForm.value.email, this.registrationForm.value.password);
      this.snackBar.open('User successfully created', 'DISMISS', {
        duration: 5000,
      });
      this.router.navigate(['/']).catch(() => console.log('An error occured'));
    }
  }

  checkPassword(input1, input2) {
    /* if ( this.loginForm.value[x] !== this.loginForm.value[y]) {
      return this.loginForm.controls.password.setErrors({notEquivalent: true});
    }
    else {
      return this.loginForm.controls.password.setErrors(null);
    } */

    return (formGroup: FormGroup) => {
      const key1 = formGroup.controls[input1];
      const key2 = formGroup.controls[input2];

      if (key2.errors && !key2.errors.notequivalent) {
        return;
      }

      if ( key1.value !== key2.value ) {
        key2.setErrors({notEquivalent: true});
      }
      else {
        key2.setErrors(null);
      }

    };
  }

  passwordStrongValidation(control: FormGroup) {
    const hasNumber = /\d/.test(control.value);
    const hasUpper = /[A-Z]/.test(control.value);
    const hasLower = /[a-z]/.test(control.value);
    const hasSpecial = /[!@#$%^&*]/.test(control.value);
    // console.log('Num, Upp, Low', hasNumber, hasUpper, hasLower);
    // const valid = hasNumber && hasUpper && hasLower;
    const valid = true;
    const returnObject = {noNumber: !hasNumber, noUpper: !hasUpper, noLower: !hasLower, noSpecial: !hasSpecial};

    if (hasNumber && hasUpper && hasLower && hasSpecial) {
      return null;
    }
    else {
      return returnObject;
    }
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(9), this.passwordStrongValidation]],
      password2: ['', [Validators.required, Validators.minLength(9)]]},
      { validator: this.checkPassword('password', 'password2') }
    );
  }

}
