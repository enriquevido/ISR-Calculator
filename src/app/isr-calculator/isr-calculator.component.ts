import { Component } from '@angular/core';
import { ISR_TARIFF } from '../data/isr-tariff';

@Component({
  selector: 'app-isr-calculator',
  standalone: true,
  template: `
    <h1>Calculadora de ISR mensual 2026</h1>

    <form>
      <label for="ingreso">Ingreso mensual gravable</label>
      <input #ingreso id="ingreso" type="number" min="0" step="0.01" />

      <label for="mes">Mes</label>
      <select id="mes">
        <option value="1">Enero</option>
        <option value="2">Febrero</option>
        <option value="3">Marzo</option>
        <option value="4">Abril</option>
        <option value="5">Mayo</option>
        <option value="6">Junio</option>
        <option value="7">Julio</option>
        <option value="8">Agosto</option>
        <option value="9">Septiembre</option>
        <option value="10">Octubre</option>
        <option value="11">Noviembre</option>
        <option value="12">Diciembre</option>
      </select>

      <button type="button" (click)="calcular(ingreso.valueAsNumber)">Calcular ISR</button>
    </form>
  `,
})
export class IsrCalculatorComponent {
  calcular(ingreso: number): void {
    if (!Number.isFinite(ingreso) || ingreso <= 0) {
      console.log('Introduce un ingreso mayor que cero.');
      return;
    }

    const ingresoGravable = Math.round(ingreso * 100) / 100;

    const rango = ISR_TARIFF.find(
      (fila) => ingresoGravable >= fila.limiteInferior && ingresoGravable <= fila.limiteSuperior,
    );

    console.log(rango);
  }
}
