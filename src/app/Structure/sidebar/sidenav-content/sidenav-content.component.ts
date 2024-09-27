import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-sidenav-content',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './sidenav-content.component.html',
  styleUrl: './sidenav-content.component.css'
})
export class SidenavContentComponent {

}
