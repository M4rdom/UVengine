import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { ConfigurationService } from '../configuration.service';
import { TextEditorService } from '../Components/text-editor.service';

import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ResolveVariabilityService {
  constructor(
    private http: HttpClient,
    private configurationService: ConfigurationService,
    private textEditorService: TextEditorService
  ) {}


  ngOnInit() {
    
  }

  async resolveVariability(configuration:string) {
    var json = JSON.parse(configuration);
    const config = json.config

    if (json.config === undefined) {
      this.textEditorService.setCode("No configuration found on Load Configuration");
      return 
    }
      

    json.template= await firstValueFrom( this.configurationService.getConfiguration())
    json.version = await firstValueFrom(this.configurationService.getSelectedVersion());

    json.config = config

    const updatedjson = JSON.stringify(json);
    json = JSON.parse(updatedjson);
    //alert(JSON.stringify(json));
    
    const url = `${environment.UVENGINE_RESOLVER_URL}/${environment.RESOLVE}`;
    const headers = {
      'Content-Type': 'application/json'
    };

    // Aquí se espera recibir un string como respuesta
    const response = await firstValueFrom(this.http.post<any>(url, json, { headers }));
    //alert(response.result);
    this.textEditorService.setCode(response.result);

  }


}
