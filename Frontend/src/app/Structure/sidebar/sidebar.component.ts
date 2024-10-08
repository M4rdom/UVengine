import { Component, ViewChild } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavContentComponent } from "./sidenav-content/sidenav-content.component";
import { SidenavMainContentComponent } from "./sidenav-main-content/sidenav-main-content.component";
import { SidenavService } from '../../Services/Components/sidenav.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatSidenav,
    MatSidenavModule,
    SidenavContentComponent,
    SidenavMainContentComponent
],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private sidenavService: SidenavService) {
    
  }
  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }
  

}
