import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appMinValue]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: MinValueDirective, multi: true}
  ]
})

export class MinValueDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    /* validation rules */
    if(parseInt(control.value) > 0) {
      return null;
    } else {
      return { appMinValue: true };
    }
  }

}

