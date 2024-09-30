import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { RouterModule } from '@angular/router';

// Services
import { SidenavService } from '../../Services/sidenav.service';
import { IconRegistryService } from '../../Services/icon-registry.service';
import { ThemeService } from '../../Services/theme.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltip,
    RouterModule,
    CommonModule,
    MatSlideToggleModule,
    FormsModule
  ],
  providers: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isDarkMode = false;
  constructor(
    private sidenavService: SidenavService,
    private maticonRegistryService: IconRegistryService,
    private themeService:ThemeService
  ) {
    
  }

  public toggleSidenav() {
    this.sidenavService.toggle();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.toggleTheme(this.isDarkMode);
  }
  
}
