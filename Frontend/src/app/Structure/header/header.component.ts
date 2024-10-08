import { Component } from '@angular/core';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';

import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

// Services
import { IconService } from '../../Services/icon.service';
import { SidenavService } from '../../Services/Components/sidenav.service';
import { ConfigurationService } from '../../Services/configuration.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltip,
    RouterModule,
  ],
  providers: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  constructor(
    private maticonRegistryService: IconService,
    private sidenavService: SidenavService,
    private configuration: ConfigurationService,
    private router:Router,
  ) {
    
  }


  click_New_Configuration() {
    if(this.router.url == '/Configuration' || this.router.url == '/Configuration?template=dockerfile' || this.router.url == '/Configuration?template=.dockerignore') {
      this.sidenavService.open();
    }
    else {
      this.router.navigate(['/Configuration']);
    }
  }

  click_shortcut() {
    if(this.router.url == '/Configuration' || this.router.url == '/Configuration?template=dockerfile' || this.router.url == '/Configuration?template=.dockerignore') {
      this.sidenavService.close();
    }
  }
}
