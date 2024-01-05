import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FormulaComponent } from './formula.component';

describe('FormulaComponent', () => {
  let component: FormulaComponent;
  let fixture: ComponentFixture<FormulaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(FormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate work correctly for positive force and positive distance', () => {
    component.fuerza = 5;
    component.distancia = 10;
    component.calcular();
    expect(component.resultado).toBe(50);
  });

  it('should calculate work correctly for positive force and zero distance', () => {
    component.fuerza = 7;
    component.distancia = 0;
    component.calcular();
    expect(component.resultado).toBe(0);
  });

  it('should calculate work correctly for zero force and positive distance', () => {
    component.fuerza = 0;
    component.distancia = 15;
    component.calcular();
    expect(component.resultado).toBe(0);
  });

  it('should calculate work correctly for negative force and positive distance', () => {
    component.fuerza = -3;
    component.distancia = 8;
    component.calcular();
    expect(component.resultado).toBe(-24);
  });

  it('should calculate work correctly for positive force and negative distance', () => {
    component.fuerza = 6;
    component.distancia = -5;
    component.calcular();
    expect(component.resultado).toBe(-30);
  });

  it('should calculate work correctly for negative force and negative distance', () => {
    component.fuerza = -2;
    component.distancia = -4;
    component.calcular();
    expect(component.resultado).toBe(8);
  });

  it('should calculate work correctly for zero force and zero distance', () => {
    component.fuerza = 0;
    component.distancia = 0;
    component.calcular();
    expect(component.resultado).toBe(0);
  });

  it('should calculate work correctly for decimal numbers', () => {
    component.fuerza = 2.5;
    component.distancia = 4.5;
    component.calcular();
    expect(component.resultado).toBe(11.25);
  });

  it('should calculate work correctly for large values of force and distance', () => {
    component.fuerza = 1000;
    component.distancia = 10000;
    component.calcular();
    expect(component.resultado).toBe(10000000);
  });

  it('should calculate work correctly for mixed positive and negative values', () => {
    component.fuerza = -2;
    component.distancia = 7;
    component.calcular();
    expect(component.resultado).toBe(-14);
  });
});