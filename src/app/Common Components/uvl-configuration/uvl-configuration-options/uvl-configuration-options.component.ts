import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCard } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { ConfigurationService } from '../../../Services/configuration.service';
import { SidenavService } from '../../../Services/Components/sidenav.service';
import { TemplateRepositoyService } from '../../../Services/Backend/template-repositoy.service';
import { IconService } from '../../../Services/icon.service';
import { JsonConfigurationService } from '../../../Services/Components/json-configuration.service';

@Component({
  selector: 'app-uvl-configuration-options',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './uvl-configuration-options.component.html',
  styleUrl: './uvl-configuration-options.component.css'
})

export class UvlConfigurationOptionsComponent {


  constructor(
    private configurationService: ConfigurationService,
    private sidenavService: SidenavService,
    private uvlApiService: TemplateRepositoyService,
    private iconRegistryService:IconService,
    private jsonConfigurationService: JsonConfigurationService,
  ) {}

  ngOnInit() {
    this.configurationService.getSelectedVersion().subscribe((version) => {
      this.SelectedVersion = version;
    });

    // Get the selected configuration from the service using Observable and subscribe to it
    this.configurationService.getConfiguration().subscribe((template) => {
      this.SelectedTemplate = template;
      this.SelectedIcon = this.iconCalculator(template);
    });
    // Get the available versions from the service using Observable and subscribe to it
    this.configurationService.getAvailableVersions().subscribe((versions) => {
      this.Versions = versions;
    });
  }

  downloaduvlModel() {
    // Template Name ---> this.SelectedTemplate
    // Version Name ---> this.SelectedVersion
    this.uvlApiService.downloadFeatureModel(this.SelectedTemplate, this.SelectedVersion);
  }

  async changeSeletedVersion(newVersion: string) {
      this.configurationService.setSelectedVersion(newVersion);
      this.SelectedVersion = newVersion;
      this.jsonConfigurationService
      
  }

  public SelectedVersion = 'Latest';
  SelectedTemplate = '';
  SelectedIcon = '';
  Versions = [''];

  public toggleSidenav() {
    this.sidenavService.toggle();
  }

  public iconCalculator(template_NAME:string):string {
    return this.iconRegistryService.iconCalculatorSidenav(template_NAME);
  }
  
}
