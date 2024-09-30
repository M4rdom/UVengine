import { Component } from '@angular/core';
import { SidebarComponent } from '../../Structure/sidebar/sidebar.component';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css'
})
export class ConfigurationComponent {

}
