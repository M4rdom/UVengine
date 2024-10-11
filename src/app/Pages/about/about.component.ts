import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from '../../Structure/footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatCardModule,
    FooterComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
