import { Component } from '@angular/core';
import { ISR_TARIFF } from '../data/isr-tariff';

@Component({
  selector: 'app-isr-tariff',
  standalone: true,
  templateUrl: './isr-tariff.component.html',
  styleUrl: './isr-tariff.component.css',
})
export class IsrTariffComponent {
  tarifa = ISR_TARIFF;
  readonly limiteSinTope = Infinity;
}
