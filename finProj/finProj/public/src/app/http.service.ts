import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class HttpService {  
  private budgetData: Subject<any> = new Subject();

  getBudget(): Observable<any> {
    return this.budgetData
  }

  updateBudget(budget: any) {
    this.budgetData.next(budget);
  }

  constructor() { }

}
