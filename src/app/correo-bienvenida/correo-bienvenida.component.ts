import {Component, Input, OnInit} from '@angular/core';
import {FormularioService} from "../formulario/FormularioService";

@Component({
  selector: 'app-correo-bienvenida',
  standalone: true,
  imports: [],
  templateUrl: './correo-bienvenida.component.html',
  styleUrl: './correo-bienvenida.component.scss'
})
export class CorreoBienvenidaComponent implements OnInit {
  @Input() fecha: string | undefined;
  @Input() unidad: string | undefined;
  @Input() valor: number | undefined;
  imagenUrl: string | ArrayBuffer = '';

  datosFormulario: { fecha: string, unidad: string, valor: number } = { fecha: '', unidad: '', valor: 0 };

constructor(private formularioService: FormularioService) {
  this.formularioService.datosFormulario$.subscribe(datos => {
    console.log(datos);  // Agrega esta línea
    this.datosFormulario = datos;
  });
}
  ngOnInit(): void {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }



}
