import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { TemplateRepositoyService } from './Backend/template-repositoy.service';

@Injectable({
  providedIn: 'root'
})

export class ConfigurationService {
  // This is the Template that is selected by the user
  private selectedConfigurationSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public selectedConfiguration$: Observable<string> = this.selectedConfigurationSubject.asObservable();

  // This is the version of the template that is selected by the user
  private selectedVersionSubject: BehaviorSubject<string> = new BehaviorSubject<string>('Latest');
  public selectedVersion$: Observable<string> = this.selectedVersionSubject.asObservable();

  // This is the list of available versions
  private availableVersionsSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public availableVersions$: Observable<string[]> = this.availableVersionsSubject.asObservable();

  // This is the list of available templates
  private availableTemplatesSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public availableTemplates$: Observable<string[]> = this.availableTemplatesSubject.asObservable();

  


  constructor(
    private uvlApiService: TemplateRepositoyService
  ) {
    
  }
  async LoadAvailableTemplates(): Promise<void> {
    this.setAvailableTemplates(await this.uvlApiService.getTempalatesList());
  }


  async ConfigurationService(configuration: string) {
    this.selectedConfigurationSubject.next(configuration);
    this.setAvailableVersions(await this.uvlApiService.getTemplateVersions(configuration));
  }

  getConfiguration(): Observable<string> {
    return this.selectedConfiguration$;
  }

  private setAvailableVersions(versions: string[]) {
    this.availableVersionsSubject.next(versions);
  }

  getAvailableVersions(): Observable<string[]> {
    return this.availableVersions$;
  }

  private setAvailableTemplates(templates: string[]) {
    this.availableTemplatesSubject.next(templates);
  }

  getAvailableTemplates(): Observable<string[]> {
    return this.availableTemplates$;
  }

  reloadAvailabeTemplates(){
    this.LoadAvailableTemplates();
  }

  setSelectedVersion(version: string) {
    this.selectedVersionSubject.next(version);
  }

  getSelectedVersion(): Observable<string> {
    return this.selectedVersion$;
  }


  clearConfiguration(){
    this.selectedConfigurationSubject.next('');
    this.selectedVersionSubject.next('Latest');
  }
}