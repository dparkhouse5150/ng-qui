import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { CheckEmailComponent } from './user/check-email/check-email.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { RegistrationCompleteComponent } from './user/registration-complete/registration-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    ResetPasswordComponent,
    LoginComponent,
    RegisterComponent,
    CheckEmailComponent,
    ForgotPasswordComponent,
    RegistrationCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
