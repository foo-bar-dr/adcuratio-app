import { UserSavedDetails } from './../models/user-saved-details';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public failMessage = '';
  loginForm: FormGroup;
  public data: UserSavedDetails;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, public router: Router) { }

  userModel: User = new User('', '');

  login(): void{
/*     if (this.loginForm.valid)
      {
        console.log(this.loginForm);
      } */
      console.log(this.loginForm);
      // this.authService.newUser(this.loginForm.value.email, this.loginForm.value.password);
      // console.log(this.authService.validateUser(this.loginForm.value.email, this.loginForm.value.password));
      if (this.authService.validateUser(this.loginForm.value.email, this.loginForm.value.password)) {
        this.data = new UserSavedDetails(this.loginForm.value.email, this.loginForm.value.email);
        const myData = JSON.parse(JSON.stringify(this.data));
        console.log(this.data);
        console.log(myData);
        localStorage.setItem('currentUser', JSON.stringify(myData));
        console.log(localStorage.getItem('currentUser'));

        this.router.navigate(['/home']).catch(() => console.log('An error occured'));
      }

      else {
        this.failMessage = 'Invalid Credentials';
      }

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(9)]],

    });

    if (!localStorage.getItem('users')) {

     }


  }

}
