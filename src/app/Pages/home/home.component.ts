import { Component } from '@angular/core';
import { FooterComponent } from '../../Structure/footer/footer.component';

import { CarouselComponent } from './Carousel/carousel.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';


import { RouterModule } from '@angular/router';

import { IconService } from '../../Services/icon.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    CarouselComponent,
    RouterModule,
    FooterComponent
],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  constructor(
    private iconservice: IconService
  ){}
}
