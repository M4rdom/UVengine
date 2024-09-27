import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-sidenav-content',
  standalone: true,
  imports: [
    MatListModule,
    MatButton,
    MatTooltip
  ],
  templateUrl: './sidenav-content.component.html',
  styleUrl: './sidenav-content.component.css'
})
export class SidenavContentComponent {

}
