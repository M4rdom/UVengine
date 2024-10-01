import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//Servico
import { SidenavService } from '../../../Services/sidenav.service';
import { IconRegistryService } from '../../../Services/icon-registry.service';

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
    MatIcon,
    RouterModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './sidenav-content.component.html',
  styleUrl: './sidenav-content.component.css'
})
export class SidenavContentComponent {
  constructor(
    private sidenavService:SidenavService,
    private iconRegistryService:IconRegistryService
  ){}

  searchText: string = ''; 
  items = [
    { name: 'Dockerfile', routerLink: '/Configuration/Dockerfile', matTooltip:"This is a tooltip!" ,icon:"docker"},
    { name: 'Nginx Configuration File', routerLink: '/Configuration', matTooltip:"This is a tooltip!" ,icon:"nginx"},
    { name: 'Apache Configuration File', routerLink: '/Configuration', matTooltip:"This is a tooltip!" ,icon:"github-black"},
    { name: 'Mongo Configuration File', routerLink: '/Configuration' , matTooltip:"This is a tooltip!",icon:"github-black"},
  ];

  // Filtrar los elementos según el texto de búsqueda
  filteredItems() {
    return this.items.filter(item => 
      item.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  loquesea(){
    this.sidenavService.close();
  }

}
