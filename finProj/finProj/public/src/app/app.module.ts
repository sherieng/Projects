import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { GraphComponent } from './graph/graph.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MinValueDirective } from './shared/min-value.directive';
import { MaxValueValidatorDirective } from './shared/max-value-validator.directive';
import { LessThanIncomeValidatorDirective } from './shared/less-than-income-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    GraphComponent,
    MinValueDirective,
    MaxValueValidatorDirective,
    LessThanIncomeValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
