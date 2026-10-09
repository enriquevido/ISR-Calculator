import { Component, signal } from '@angular/core';
import { ISR_TARIFF } from '../data/isr-tariff';
import { IsrResultComponent } from '../isr-result/isr-result.component';
import { IsrResult } from '../models/isr-result';
import { IsrTariffComponent } from '../isr-tariff/isr-tariff.component';

@Component({
  selector: 'app-isr-calculator',
  standalone: true,
  imports: [IsrResultComponent, IsrTariffComponent],
  templateUrl: './isr-calculator.component.html',
  styleUrl: './isr-calculator.component.css',
})
export class IsrCalculatorComponent {
  resultado = signal<IsrResult | null>(null);
  calcular(ingreso: number, mes: string): void {
    this.resultado.set(null);
    if (!Number.isFinite(ingreso) || ingreso <= 0) {
      console.log('Introduce un ingreso mayor que cero.');
      return;
    }

    const ingresoGravable = Math.round(ingreso * 100) / 100;

    const rango = ISR_TARIFF.find(
      (fila) => ingresoGravable >= fila.limiteInferior && ingresoGravable <= fila.limiteSuperior,
    );

    if (!rango) {
      console.log('No se encontró un rango para ese ingreso');
      return;
    }

    const excedente = ingresoGravable - rango.limiteInferior;

    console.log('Excedente:', excedente);

    const impuestoMarginal = excedente * (rango.porcentaje / 100);

    console.log('Impuesto marginal: ', impuestoMarginal);

    const isrAntesSubsidio = rango.cuotaFija + impuestoMarginal;

    console.log('ISR antes del subsidio: ', isrAntesSubsidio);

    let subsidio = 0;
    if (ingresoGravable <= 11492.66) {
      if (mes === '1') {
        subsidio = 3439.46 * (15.59 / 100);
      } else {
        subsidio = 3566.22 * (15.02 / 100);
      }
    }

    subsidio = Math.round(subsidio * 100) / 100;

    const isrRetenido = Math.max(0, isrAntesSubsidio - subsidio);
    const ingresoRestante = ingresoGravable - isrRetenido;

    console.log('Subsidio mensual: ', subsidio);
    console.log('ISR estimado a retener', isrRetenido);
    console.log('Ingreso después del ISR', ingresoRestante);

    this.resultado.set({
      ingresoGravable,
      limiteInferior: rango.limiteInferior,
      cuotaFija: rango.cuotaFija,
      porcentaje: rango.porcentaje,
      excedente,
      impuestoMarginal,
      isrAntesSubsidio,
      subsidio,
      isrRetenido,
      ingresoRestante,
    });

    console.log('Resultado: ', this.resultado());
  }
}
