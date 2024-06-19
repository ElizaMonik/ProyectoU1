import { Component } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { OfferComponent } from "../offer/offer.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CarouselComponent, OfferComponent, HeaderComponent, FooterComponent]
})
export class HomeComponent {

}
