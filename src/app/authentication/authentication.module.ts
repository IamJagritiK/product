import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignupComponent } from './signup/signup.component';
// @ts-ignore
import { PasswordEqualValidatorDirective} from './password-equal-validator.directive';
import {FormsModule} from '@angular/forms';
import {AuthenticationService} from './signup/authentication.service';
import {UserService} from './signup/user.service';
import {ErrorAlertComponent} from './error-alert/error-alert.component';


@NgModule({
  declarations: [ SignupComponent, ErrorAlertComponent, PasswordEqualValidatorDirective],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule
  ],
  exports: [
    SignupComponent
  ],
  providers: [
    AuthenticationService,
    UserService
  ]
})
export class AuthenticationModule { }
