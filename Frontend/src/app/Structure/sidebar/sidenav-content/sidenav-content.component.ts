import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


//Servico
import { SidenavService } from '../../../Services/Components/sidenav.service';
import { IconService } from '../../../Services/icon.service';
import { ConfigurationService } from '../../../Services/configuration.service';



@Component({
  selector: 'app-sidenav-content',
  standalone: true,
  imports: [
    MatListModule,
    MatButton,
    MatTooltip,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatIcon,
    RouterModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './sidenav-content.component.html',
  styleUrl: './sidenav-content.component.css'
})
export class SidenavContentComponent {
  refresh() { 
    this.configurationService.reloadAvailabeTemplates();
  }
  constructor(
    private sidenavService:SidenavService,
    private iconRegistryService:IconService,
    private configurationService:ConfigurationService
  ){
    
  }

  ngOnInit(){
    //Nos sub
    this.configurationService.getAvailableTemplates().subscribe((templates) => {
      this.templates = templates.map(template => ({ name: template }));
    });


  }
  searchText: string = ''; 

  templates = [{ name: 'Dockerfile' }];

  filteredItems(): { name: string }[] {
    return this.templates.filter(template => 
      template.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  closeSidenav(){
    this.sidenavService.close();
  }

  iconCalculator(templateName:string):string{
    return this.iconRegistryService.iconCalculator1(templateName);

  }


}
