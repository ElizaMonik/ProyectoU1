import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OfferComponent } from './offer/offer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CorreoBienvenidaComponent } from './correo-bienvenida/correo-bienvenida.component';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OfferComponent,HomeComponent, HeaderComponent, FooterComponent, LoginComponent, CorreoBienvenidaComponent, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'plantilla';
}
