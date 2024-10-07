import { Component } from '@angular/core';

import { MatCard } from '@angular/material/card';

import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { JsonConfigurationService } from '../../Services/Components/json-configuration.service';
import { ResolveVariabilityService } from '../../Services/Backend/resolve-variability.service';

@Component({
  selector: 'app-json-viewer',
  standalone: true,
  imports: [
    NgxJsonViewerModule,
    MatCard,
  ],
  templateUrl: './json-viewer.component.html',
  styleUrl: './json-viewer.component.css'
})
export class JsonViewerComponent {
  
  json  = {
    "Not valid Json, please Insert a Valid Json file":":)"
  };

  constructor(
    private jsonConfigurationService: JsonConfigurationService,
    private resolveVariabilityService: ResolveVariabilityService
  ) 
    {
      this.loadJson();
  }

  loadJson() {
    this.jsonConfigurationService.currentStringValue.subscribe((configuration) => {
      try {
        this.json = JSON.parse(configuration); // Means it is a valid JSON otherwise it will throw an error
        console.log("JSON:", this.json);

        this.resolveVariabilityService.resolveVariability(configuration);

      } catch (error) {
        this.json = {"Not valid Json, please Insert a Valid Json file":":)"};
      }
    });
  }


}
