import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CorreoBienvenidaComponent } from './correo-bienvenida/correo-bienvenida.component';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RegistroComponent } from './registro/registro.component';
export const routes: Routes = [

    {path: 'app-login', component: LoginComponent, pathMatch: 'full'},
    {path: 'app-correo-bienvenida', component: CorreoBienvenidaComponent, pathMatch: 'full'},
    {path: 'app-home', component:  HomeComponent, pathMatch: 'full',},
    {path: 'app-formulario', component:   FormularioComponent, pathMatch: 'full',},
    {path: '', redirectTo: 'app-home', pathMatch: 'full'},
    {path: 'app-registro', component:   RegistroComponent , pathMatch: 'full',}
];
