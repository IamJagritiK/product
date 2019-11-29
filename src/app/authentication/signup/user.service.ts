import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {User} from 'firebase';
import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireDb: AngularFireDatabase) { }

  public addUser(user: User): void {
    this.fireDb.object('signupFormData.value.name/ userInfo.uid').set(user);
  }


}
