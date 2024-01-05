import { Component } from '@angular/core';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent {
  fuerza: number = 0;
  distancia: number = 0;
  resultado: number = 0;

  calcularTrabajo(fuerza: number, distancia: number): number {
    return fuerza * distancia;
  }

  calcular() {
    this.resultado = this.calcularTrabajo(this.fuerza, this.distancia);
  }
}