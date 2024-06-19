import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  private datosFormulario = new BehaviorSubject<{ fecha: string, unidad: string, valor: number }>({ fecha: '', unidad: '', valor: 0 });

  datosFormulario$ = this.datosFormulario.asObservable();

  actualizarDatosFormulario(datos: { fecha: string, unidad: string, valor: number }) {
   console.log(datos);
    this.datosFormulario.next(datos);
  }
}
