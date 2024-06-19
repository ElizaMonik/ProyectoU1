import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {FormularioService} from "./FormularioService";

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {


  formulario: FormGroup;
  imc: number | null = null;
  mensajeCostoCurso: string | null = null;
  mensajeFormulario: string | null = null;
  costo: number = 0;
  fechaCompleta: string = '';
  @Output() enviarDatos = new EventEmitter<{ fecha: string, unidad: string, valor: number }>();

  mostrarErrores: any = {
    nombre: false,
    apellido: false,
    cedula: false,
    edad: false,
    correo: false,
    unidad: false,
    peso: false,
    talla: false,
    fecha: false
  };

  constructor(private fb: FormBuilder, private router: Router, private formularioService: FormularioService) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(\s[a-zA-Z]+)*$/)]],
      apellido: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(\s[a-zA-Z]+)*$/)]],
      cedula: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^\d{10}$/)]],
      correo: ['', [Validators.required, Validators.email]],
      edad: ['', [Validators.required, Validators.min(18)]],
      unidad: ['', Validators.required],
      peso: ['', [Validators.required, Validators.min(0)]],
      talla: ['', [Validators.required, this.validarTalla]],
      fecha: ['', [Validators.required, this.validarFecha]]
    });

    this.formulario.valueChanges.subscribe(() => {
      this.verificarErrores();
    });

    this.formulario.get('fecha')?.valueChanges.subscribe((value) => {
      if (this.formulario.get('fecha')?.valid) {
        this.calcularCostoCurso(value);
      }
    });

    this.formulario.get('peso')?.valueChanges.subscribe(() => {
      if (this.formulario.get('peso')?.valid && this.formulario.get('talla')?.valid) {
        this.calcularIMC();
      }
    });

    this.formulario.get('talla')?.valueChanges.subscribe(() => {
      if (this.formulario.get('peso')?.valid && this.formulario.get('talla')?.valid) {
        this.calcularIMC();
      }
    });
  }

  validarTalla(control: AbstractControl): ValidationErrors | null {
    const talla = control.value;
    const tallaPattern = /^\d+(\.\d{1,2})?$/;
    return tallaPattern.test(talla) ? null : {validarTalla: true};
  }

  validarFecha(control: AbstractControl): ValidationErrors | null {
    const fecha = new Date(control.value);
    const hoy = new Date();
    return fecha > hoy ? null : {validarFecha: true};
  }

  calcularIMC(): void {
    const peso = this.formulario.get('peso')?.value ?? 0;
    const talla = this.formulario.get('talla')?.value ?? 0;
    if (peso && talla) {
      const sqrtTalla = talla * talla;
      this.imc = peso / sqrtTalla;
    } else {
      this.imc = null;
    }
  }

  calcularCostoCurso(fecha: string): void {
    if (fecha) {
      const [year, month, day] = fecha.split('-').map(Number);
      const date = new Date(year, month - 1, day);
      const dayOfWeek = date.getDay();
      const dayNames = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
      const dayName = dayNames[dayOfWeek];
      const formattedDate = date.toLocaleDateString('es-ES', {day: 'numeric', month: 'long', year: 'numeric'});

      if (dayOfWeek === 0 || dayOfWeek === 6) {
        this.costo = 30;
      } else {
        this.costo = 25;
      }
      this.fechaCompleta = `${dayName} ${formattedDate}`
      this.mensajeCostoCurso = `El curso para el día ${dayName} ${formattedDate} le sale por $${this.costo}`;
    } else {
      this.mensajeCostoCurso = null;
    }
  }

  verificarErrores(): void {
    Object.keys(this.formulario.controls).forEach((key) => {
      const control = this.formulario.get(key);
      if (control && control.invalid && (control.dirty || control.touched)) {
        this.mostrarErrores[key] = true;
        setTimeout(() => this.mostrarErrores[key] = false, 8000);
      }
    });
  }

  EnvioCorreo() {
    if (this.formulario.valid) {
      const fecha = this.fechaCompleta;
      const unidad = this.formulario.value.unidad;
      const valor = this.costo;
      this.formularioService.actualizarDatosFormulario({fecha, unidad, valor});
      this.router.navigate(['/app-correo-bienvenida']);
    } else {
      this.mensajeFormulario = 'Llena todos los campos';
      setTimeout(() => {
        this.mensajeFormulario = null;
      }, 2000);
    }
  }
}
