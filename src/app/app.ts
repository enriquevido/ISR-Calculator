import { Component, signal } from '@angular/core';
import { IsrCalculatorComponent } from './isr-calculator/isr-calculator.component';

@Component({
  selector: 'app-root',
  imports: [IsrCalculatorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('calculadora-isr');
}
