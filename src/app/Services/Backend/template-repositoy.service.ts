import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { environment } from '../../../environments/environment';

import { LoadingStatusService } from '../loading-status.service';
@Injectable({
  providedIn: 'root'
})

export class TemplateRepositoyService {

  constructor(
    private http: HttpClient,
    private loadingStatusService: LoadingStatusService,
  ) {}

  async getTempalatesList(): Promise<string[]>{
    const url = `${environment.REPOSITORY_MANAGER_URL}/templates`;
    try{
      
    const response = await firstValueFrom(this.http.get<string[]>(url));
    this.loadingStatusService.setLoadingTemplatesList(false);

      return response;
    }catch(error){
      this.loadingStatusService.setLoadingTemplatesList(false);
      return [];
    }
  }

  async getTemplateVersions(template_NAME: string): Promise<string[]> {
    const url = `${environment.REPOSITORY_MANAGER_URL}/${template_NAME}/${environment.VERSIONS}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const response = await firstValueFrom(this.http.get<string[]>(url, { headers }));

    return response;
  }

  async downloadFeatureModel(template_NAME: string, version: string): Promise<void> {
    const url = `${environment.REPOSITORY_MANAGER_URL}/${template_NAME}/${version}/${environment.FEATURE_MODEL}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const response = await firstValueFrom(this.http.get(url, { headers, responseType: 'blob' }));

    this.downloadFile(response, `${template_NAME}-${version}-FeatureModel.uvl`);
  }

  private downloadFile(data: Blob, filename: string) {
    const blob = new Blob([data], { type: data.type });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
  
}

