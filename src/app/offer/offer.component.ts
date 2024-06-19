import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Offer {
  img: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss'
})
export class OfferComponent {
  // Define la propiedad offers como un array de objetos tipo Offer
  offers: Offer[] = [
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAilVGLL5K9LSv7IsXWtunTmoKOK71s-ovXA&s', // Reemplaza con el enlace correcto
      title: 'EJERCITO',
      description: 'Desarrollar el poder militar terrestre, para la consecución de los objetivos institucionales, que garanticen la defensa, contribuyan con la seguridad y desarrollo de la nación'
    },
    {
      img: 'https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/QXESG7K4OFCZ7JW2BBMDT7VHEM.jpg', // Reemplaza con el enlace correcto
      title: 'FAE',
      description: 'Desarrollar las capacidades marítimas y proveer la seguridad en los espacios acuáticos, que fortalezcan el poder naval y que contribuyan a la defensa de la soberanía.'
    },
    {
      img: 'https://imagenes.expreso.ec/files/og_thumbnail/uploads/2020/07/16/5f1060287824f.jpeg', // Reemplaza con el enlace correcto
      title: 'MARINA',
      description: 'La Armada del Ecuador, también llamada Fuerza Naval es una rama de las Fuerzas Armadas del Ecuador, responsable en tiempos de guerra de conservar la soberanía marítima del Ecuador y en tiempos de paz.'
    }
  ];
}