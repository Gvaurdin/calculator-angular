import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCalculatorComponent } from "./my-calculator/my-calculator.component";
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyFooterComponent } from './my-footer/my-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyCalculatorComponent, MyHeaderComponent, MyFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'Изучаю Ангуляр';
  protected tooltip: string = 'Крутая подсказка';
  showMessage() {
    alert('Ok');
  }
}
