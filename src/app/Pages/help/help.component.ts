import { Component } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { FooterComponent } from '../../Structure/footer/footer.component';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatDividerModule,
    FooterComponent,
  ],
  templateUrl: './help.component.html',
  styleUrl: './help.component.css'
})
export class HelpComponent {

}
