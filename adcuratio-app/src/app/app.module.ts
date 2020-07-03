import { HomeComponent } from './home/home/home.component';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      RegistrationComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      MatIconModule,
      MatTooltipModule,
      MatButtonModule,
      ReactiveFormsModule,
      NgbModule,
      MatTabsModule,
      MatMenuModule,
      MatTableModule,
      MatSortModule,
      MatSlideToggleModule,
      MatSnackBarModule
   ],
   providers: [
     MatTooltipModule,
     AuthService,
     NgbTooltipConfig,
     MatMenuModule,
     MatSortModule
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
