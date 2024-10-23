import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-calculator',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.scss'
})
export class MyCalculatorComponent {
  public first: number = 1;
  public second: number = 2;
  public operation: string = '+';
  public operations: string[] = ['+', '-', '*', '/'];
  public result?: number;

  public calc() {
    switch (this.operation) {
      case '+':
        this.result = this.first + this.second;
        break;
      case '-':
        this.result = this.first - this.second;
        break;
      case '*':
        this.result = this.first * this.second;
        break;
      case '/':
        this.result = this.first / this.second;
        break;
      default:
        this.result = undefined;
        break;
    }
  }
}
