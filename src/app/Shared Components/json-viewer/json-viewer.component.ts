import { Component } from '@angular/core';


import { MatCard } from '@angular/material/card';


import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { JsonConfigurationService } from '../../Services/json-configuration.service';
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
    "Did you load a json?":false
  };

  constructor(
    private jsonConfigurationService: JsonConfigurationService
  ) 
    {
    jsonConfigurationService.currentStringValue.subscribe((value) => {
      try {
        this.json = JSON.parse(value);
        console.log("JSON:", this.json);
      } catch (error) {
        this.json = {"Did you load a json?":false};
      }
    });
  }


}
