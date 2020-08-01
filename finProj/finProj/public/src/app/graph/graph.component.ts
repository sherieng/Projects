import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import Chart from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  public data: any;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  budget: any
  budgetChart: any 
  remaining_amt: number

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    
    this.drawChart()

  }

  drawChart(){
    this._httpService.getBudget().subscribe(data => {
      this.budget = data
      console.log(this.budget)

    this.remaining_amt = this.budget.income - this.budget.savings - this.budget.loan - this.budget.retirement
    
    var chartBudget = document.getElementById('chart-budget');

    this.budgetChart = new Chart( chartBudget, {
      type: 'pie',
      data: {
        labels: ['Retirement','Loan', 'Savings','Remaining Amount'],
        datasets: [{
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: [
            '#11cdef',
            '#f5365c',
            '#2dce89',
            '#5e72e4'
          ],
          borderWidth: 1,
          data: [this.budget.retirement, this.budget.loan, this.budget.savings, this.remaining_amt]
        }],

        options:{
          legend: {
            display: false
          },

          pieceLabel: {
            render: 'percentage',
            fontColor: ['white'],
            precision: 2
          },

          tooltips: {
            enabled: false
          },

          scales: {
            yAxes: [{

              ticks: {
                display: false
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: "transparent",
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: "transparent"
              },
              ticks: {
                display: false,
              }
            }]
          },
        }
      }
      });
    });
  }
}
