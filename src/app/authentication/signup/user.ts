import {AbstractControl, ValidationErrors} from '@angular/forms';

export class User {

  constructor(email: boolean | string | ((control: AbstractControl) => (ValidationErrors | null)), name: any, mobile: string, uid: string | number, number: number, s: string) {
  }

  email: string;

  name: string;

  mobile: string;

  uid: string;

  friendcount: number;

  image: string;
}
