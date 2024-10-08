import { Component } from '@angular/core';
import { SidebarComponent } from '../../Structure/sidebar/sidebar.component';

import { ActivatedRoute } from '@angular/router';

//Servicces
import { ConfigurationService } from '../../Services/configuration.service';
import { LoadingStatusService } from '../../Services/loading-status.service';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [
    SidebarComponent
  ],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css'
})

export class ConfigurationComponent {

  constructor(
    private configurationService: ConfigurationService,
    private loadingStatusService: LoadingStatusService,
    private route: ActivatedRoute

  ) {
    
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const template = params['template'];
      if (template){
        this.configurationService.ConfigurationService(template);
      }
    });

    //this.configurationService.LoadAvailableTemplates();
  }

  ngOnDestroy() {
    this.configurationService.clearConfiguration();
    this.loadingStatusService.setLoadingProduct(false);
    this.loadingStatusService.setLoadingTemplatesList(false);

  }

}
