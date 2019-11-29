import {Attribute, Directive} from '@angular/core';
import {AbstractControl, Validator} from '@angular/forms';

@Directive({
  selector: '[appPasswordEqualValidator]'
})
export class PasswordEqualValidatorDirective implements Validator {
  constructor(@Attribute('passwordEqual') public passwordEqual: string) {
  }

  validate(control: AbstractControl): { [key: string]: any } {
    const retypePassword = control.value;

    const originalPassword = control.root.get(this.passwordEqual);

    // original & retype password is egual
    return (originalPassword && retypePassword !==
      originalPassword.value)
      ? {passwordEqual: false} : null;
  }

}
