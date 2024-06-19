import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [LoginComponent, RouterLink]
})
export class HeaderComponent {
  openLoginInNewTab() {
    window.open('/app-login', '_blank');
  }
}
