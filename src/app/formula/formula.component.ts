import { Component } from '@angular/core';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})

export class FormulaComponent {

  calcularTrabajo(fuerza: number, distancia: number): number {
    return fuerza * distancia;
   }

  
}
