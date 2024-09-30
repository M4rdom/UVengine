import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav-content',
  standalone: true,
  imports: [
    MatListModule,
    MatButton,
    MatTooltip,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    RouterModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './sidenav-content.component.html',
  styleUrl: './sidenav-content.component.css'
})
export class SidenavContentComponent {
  constructor(
  ){}

  searchText: string = ''; // Texto de búsqueda
  items = [
    { name: 'Home', link: '/home' },
    { name: 'Profile', link: '/profile' },
    { name: 'Settings', link: '/settings' },
    { name: 'About', link: '/about' },
  ];

  // Filtrar los elementos según el texto de búsqueda
  filteredItems() {
    return this.items.filter(item => 
      item.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}
