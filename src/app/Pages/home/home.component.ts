import { Component } from '@angular/core';
import { FooterComponent } from '../../Structure/footer/footer.component';

import { CarouselComponent } from './Carousel/carousel.component';
import { FeaturesLinkComponent } from './features-link/features-link.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';


import { RouterModule } from '@angular/router';

import { IconService } from '../../Services/icon.service';
import { MainLinksComponent } from "./main-links/main-links.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    CarouselComponent,
    FeaturesLinkComponent,
    RouterModule,
    FooterComponent,
    MainLinksComponent
],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  constructor(
    private iconservice: IconService
  ){}
}
