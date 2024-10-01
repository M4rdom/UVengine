import { Component } from '@angular/core';

import { MatCard } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-uvl-configuration-options',
  standalone: true,
  imports: [
    MatCard,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './uvl-configuration-options.component.html',
  styleUrl: './uvl-configuration-options.component.css'
})
export class UvlConfigurationOptionsComponent {
  SelectedVersion = 'Latest';
  Versions = ['Latest', '1.0.0', '0.9.0', '0.8.0', '0.7.0', '0.6.0', '0.5.0', '0.4.0', '0.3.0', '0.2.0', '0.1.0'];

  menuItems = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    // Agrega más elementos según sea necesario
  ];
}
