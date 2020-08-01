import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';
import { HttpService } from '../http.service';

@Directive({
  selector: '[appMaxValueValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: MaxValueValidatorDirective, multi: true}
  ]
})
export class MaxValueValidatorDirective implements Validator{
  budget: any; 

  constructor(private _httpService: HttpService) { }



    validate(control: AbstractControl): ValidationErrors | null {
        /* validation rules */

        this._httpService.getBudget().subscribe(data => {
          this.budget = data
        });

        if(parseInt(control.value) < this.budget.income) {
          return null;
        } else {
          return { appMaxValueValidator: true };
        }
      }
}


