import { Component, Input } from '@angular/core';
import { IsrResult } from '../models/isr-result';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-isr-result',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <section>
      <h2>Resultado del cálculo</h2>
      <p>
        Ingreso mensual gravable:
        {{ resultado.ingresoGravable | currency: 'MXN' : 'code' : '1.2-2' }}
      </p>
      <p>Limite inferior: {{ resultado.limiteInferior | currency: 'MXN' : 'code' : '1.2-2' }}</p>
      <p>Cuota fija: {{ resultado.cuotaFija | currency: 'MXN' : 'code' : '1.2-2' }}</p>
      <p>Porcentaje aplicable: {{ resultado.porcentaje | currency: 'MXN' : 'code' : '1.2-2' }}</p>
      <p>Excedente: {{ resultado.excedente | currency: 'MXN' : 'code' : '1.2-2' }}</p>
      <p>
        Impuesto marginal: {{ resultado.impuestoMarginal | currency: 'MXN' : 'code' : '1.2-2' }}
      </p>
      <p>
        ISR antes del subdisio:
        {{ resultado.isrAntesSubsidio | currency: 'MXN' : 'code' : '1.2-2' }}
      </p>
      <p>Subsidio mensual: {{ resultado.subsidio | currency: 'MXN' : 'code' : '1.2-2' }}</p>
      <p>
        ISR estimado a retener: {{ resultado.isrRetenido | currency: 'MXN' : 'code' : '1.2-2' }}
      </p>
      <p>
        Ingreso restante después únicamente del ISR:
        {{ resultado.ingresoRestante | currency: 'MXN' : 'code' : '1.2-2' }}
      </p>
    </section>
  `,
})
export class IsrResultComponent {
  @Input({ required: true }) resultado!: IsrResult;
}
