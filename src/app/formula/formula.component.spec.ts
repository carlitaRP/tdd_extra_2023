import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulaComponent } from './formula.component';

describe('FormulaComponent', () => {
  let component: FormulaComponent;
  let fixture: ComponentFixture<FormulaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaComponent]
    });
    fixture = TestBed.createComponent(FormulaComponent);
    component = fixture.componentInstance;
  });

  it('debería calcular el trabajo correctamente para fuerza positiva y distancia positiva', () => {
    expect(component.calcularTrabajo(5, 10)).toBe(50);
  });

  it('debería calcular el trabajo correctamente para fuerza positiva y distancia cero', () => {
    expect(component.calcularTrabajo(7, 0)).toBe(0);
  });

  it('debería calcular el trabajo correctamente para fuerza cero y distancia positiva', () => {
    expect(component.calcularTrabajo(0, 15)).toBe(0);
  });

  it('debería calcular el trabajo correctamente para fuerza negativa y distancia positiva', () => {
    expect(component.calcularTrabajo(-3, 8)).toBe(-24);
  });

  it('debería calcular el trabajo correctamente para fuerza positiva y distancia negativa', () => {
    expect(component.calcularTrabajo(6, -5)).toBe(-30);
  });

  it('debería calcular el trabajo correctamente para fuerza negativa y distancia negativa', () => {
    expect(component.calcularTrabajo(-2, -4)).toBe(8);
  });

  it('debería calcular el trabajo correctamente para fuerza cero y distancia cero', () => {
    expect(component.calcularTrabajo(0, 0)).toBe(0);
  });

  it('debería calcular el trabajo correctamente para números decimales', () => {
    expect(component.calcularTrabajo(2.5, 4.5)).toBe(11.25);
  });

  it('debería calcular el trabajo correctamente para grandes valores de fuerza y distancia', () => {
    expect(component.calcularTrabajo(1000, 10000)).toBe(10000000);
  });

  it('debería calcular el trabajo correctamente para valores mixtos', () => {
    expect(component.calcularTrabajo(-2, 7)).toBe(-14);
  });
});