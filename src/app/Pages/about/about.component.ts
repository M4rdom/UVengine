import { Component } from '@angular/core';
import { FooterComponent } from '../../Structure/footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    FooterComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
