import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {UserService} from './user.service';
// @ts-ignore
import {User} from 'firebase';
// @ts-ignore
import { User, User } from './user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
  constructor(private authService: AuthenticationService, private userService: UserService) {
  }



  errorMessage: string;

  showError: boolean;
  // @ts-ignore
  private authService: any;

  onSignup(signupFormData): void {
    this.authService.signup(signupFormData.value.email,
      signupFormData.value.password).then((userInfo) => {
      // @ts-ignore
      const user: User = new User(signupFormData.value.email,
        signupFormData.value.name, signupFormData.value.mobile,
        userInfo.uid, 0, '');
      this.writeNewUser(user);
    }).catch((error) => {
      this.showError = true;
      this.errorMessage = error.message;
    });
  }

  private writeNewUser(user: User): void {
    this.userService.addUser(user);
  }
}
