// import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms'
// import { Directive, OnInit, forwardRef } from '@angular/core';

// @Directive({
//     selector: '[budgetValidator]',
//     providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
//   })
//   export class ForbiddenValidatorDirective implements Validator {
//     @Input('budgetValidator') forbiddenName: string;
  
//     validate(control: AbstractControl): {[key: string]: any} | null {
//       return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
//                                 : null;
//     }
//   }

//     export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
//         return (control: AbstractControl): {[key: string]: any} | null => {
//         const forbidden = nameRe.test(control.value);
//         return forbidden ? {'forbiddenName': {value: control.value}} : null;
//         };
//   }