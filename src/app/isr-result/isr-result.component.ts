import { Component, Input } from '@angular/core';
import { IsrResult } from '../models/isr-result';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-isr-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './isr-result.component.html',
  styleUrl: './isr-result.component.css',
})
export class IsrResultComponent {
  @Input({ required: true }) resultado!: IsrResult;
}
