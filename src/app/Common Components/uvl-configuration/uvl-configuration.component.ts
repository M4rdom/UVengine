import { Component } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';

import { UvlConfigurationOptionsComponent } from './uvl-configuration-options/uvl-configuration-options.component';
import { JsonViewerComponent } from "../../Shared Components/json-viewer/json-viewer.component";
import { LoadConfigurationComponent } from '../../Shared Components/load-configuration/load-configuration.component';


import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-uvl-configuration',
  standalone: true,
  imports: [
    MatTabsModule,
    RouterOutlet,
    JsonViewerComponent,
    UvlConfigurationOptionsComponent,
    LoadConfigurationComponent
],
  templateUrl: './uvl-configuration.component.html',
  styleUrl: './uvl-configuration.component.css'
})
export class UvlConfigurationComponent {

}
