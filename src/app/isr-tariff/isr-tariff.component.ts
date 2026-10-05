import { Component } from '@angular/core';
import { ISR_TARIFF } from '../data/isr-tariff';

@Component({
  selector: 'app-isr-tariff',
  standalone: true,
  template: `
    <section>
      <h2>Tarifa mensual de ISR 2026</h2>

      <table>
        <thead>
          <tr>
            <th scope="col">Limite inferior ($)</th>
            <th scope="col">Limite superior ($)</th>
            <th scope="col">Cuota fija ($)</th>
            <th scope="col">Porcentaje (%)</th>
          </tr>
        </thead>
        <tbody>
          @for (rango of tarifa; track rango.limiteInferior) {
            <tr>
              <td>{{ rango.limiteInferior }}</td>
              <td>
                {{ rango.limiteSuperior === Infinity ? 'En adelante' : rango.limiteSuperior }}
              </td>
              <td>{{ rango.cuotaFija }}</td>
              <td>{{ rango.porcentaje }}</td>
            </tr>
          }
        </tbody>
      </table>
    </section>
  `,
})
export class IsrTariffComponent {
  tarifa = ISR_TARIFF;
}
