import { UserSavedDetails } from './../models/user-saved-details';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthProviderService implements CanActivate {

constructor(private router: Router) { }

canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  console.log(JSON.parse(localStorage.getItem('currentUser')));
  const user: UserSavedDetails = JSON.parse(localStorage.getItem('currentUser'));

  if (user) {
    return true;
  }

  this.router.navigate(['/'], {queryParams: {returnUrl: state.url}}).catch(() => console.log('An Error occured while navigating to the page.'));
  return false;
}

}
