import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  numberFirst:number;
  numberSecond:number;
  result:number;

  constructor() { }

  ngOnInit(): void {
  }

  add(){
      this.result = parseInt(String(this.numberFirst))+parseInt(String(this.numberSecond));
      return parseInt(String(this.result));
  }

  sub() {
    this.result = this.numberFirst-this.numberSecond;
    return parseInt(String(this.result));
  }

  mul() {
    this.result = this.numberFirst*this.numberSecond;
    return parseInt(String(this.result));
  }

  div() {
    this.result = this.numberFirst/this.numberSecond;
    return parseInt(String(this.result));
  }
}
