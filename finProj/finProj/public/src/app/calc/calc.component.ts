import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Budget } from '../budget';
import { HttpService } from '../http.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
// import { BudgetValidator} from '../budget.validator'
@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {
  newBudget: any

  constructor(private _httpService: HttpService) { }

  ngOnInit(){      
    this.newBudget = new Budget(0, 0, 0, 0)
    console.log("create")
  }


  onSubmit(){
    if((parseInt(this.newBudget.loan) + parseInt(this.newBudget.savings) + parseInt(this.newBudget.retirement)) < parseInt(this.newBudget.income)){
      this._httpService.updateBudget(this.newBudget)
      console.log("on submit")
    }
  }
}
