import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-carousel-ease';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    MatCardModule,
    CarouselModule
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

}
