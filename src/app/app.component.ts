import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tableValues = [];
  savings: Savings = {
    startAmount:null,
    rateOfReturn:null,
    numberOfYears:null,
  }
  
  onCalcuate(){
    var numOfMonths = this.savings.numberOfYears * 12;
    var principal = this.savings.startAmount;
    var rate = this.savings.rateOfReturn;
    var htmlOutput ='';
    var newBalance = principal;
    var tableValues = [];
    for(var i = 1;i <=numOfMonths; i++){
      rate = parseFloat(rate);
      var intrestAmt = newBalance * ((rate/ 100)/12);
      intrestAmt = Math.round(intrestAmt * 100) / 100;
      newBalance = parseFloat(newBalance);
      newBalance = newBalance + intrestAmt;
      tableValues.push({month:i,intrest:intrestAmt.toFixed(2),balance:newBalance.toFixed(2) });
    }
     this.tableValues=tableValues;
  }
  onReset(){
    this.tableValues = [];
    this.savings.startAmount = null;
    this.savings.rateOfReturn = null;
    this.savings.numberOfYears = null;
  }
}
export class Savings{
  startAmount:any;
  rateOfReturn:any;
  numberOfYears:any;

}