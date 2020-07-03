import { AuthProviderService } from './services/auth-provider.service';
import { HomeComponent } from './home/home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthProviderService]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
