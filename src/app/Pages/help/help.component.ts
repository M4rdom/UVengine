import { Component } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';
import { FooterComponent } from '../../Structure/footer/footer.component';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [
    MatExpansionModule,
    FooterComponent,
  ],
  templateUrl: './help.component.html',
  styleUrl: './help.component.css'
})
export class HelpComponent {

}
