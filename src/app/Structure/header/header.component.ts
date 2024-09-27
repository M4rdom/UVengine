import { Component, importProvidersFrom } from '@angular/core';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';


import { RouterModule } from '@angular/router';

// Services
import { SidenavService } from '../../Services/sidenav.service';
import { IconRegistryService } from '../../Services/icon-registry.service';

import { HttpClient} from '@angular/common/http';

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
  providers: [HttpClient],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(
    private sidenavService: SidenavService,
    private maticonRegistryService: IconRegistryService
  ) {
    
  }

  public toggleSidenav() {
    this.sidenavService.toggle();
  }
  
}
