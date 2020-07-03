import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public savedUsersArray = [];

constructor(private snackBar: MatSnackBar) {
  if (localStorage.getItem('savedUsers') === null) {
    localStorage.setItem('savedUsers', JSON.stringify([]));
  }
  else {
    this.savedUsersArray = JSON.parse(localStorage.getItem('savedUsers'));
  }
 }

 newUser(email, password) {
   const newUser: User = new User(email, password);
   this.savedUsersArray.push(newUser);
   console.log(this.savedUsersArray);
   localStorage.setItem('savedUsers', JSON.stringify(this.savedUsersArray));
 }

 validateUser(email, password) {
  //  console.log(this.savedUsersArray);
   const newUser: User = new User(email, password);
   if (this.savedUsersArray.filter((user) => {

     if (user.email === newUser.email && user.password === newUser.password) {
      return true;
     }
  }).length > 0 ) {
    return true;
  }
  else {
    return false;
  }
 }

 logoutUser() {
   localStorage.removeItem('currentUser');
   this.snackBar.open('User has been logged out', 'DISMISS', {
    duration: 3000,
  });
 }

}
