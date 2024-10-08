import { Component  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

import { TextEditorOptionsComponent } from './text-editor-options/text-editor-options.component';
import { TextSpinnerLoadingComponent } from './text-spinner-loading/text-spinner-loading.component';

// Services
import { TextEditorService } from '../../Services/Components/text-editor.service';
import { ConfigurationService } from '../../Services/configuration.service';
import { SidenavService } from '../../Services/Components/sidenav.service';
import { LoadingStatusService } from '../../Services/loading-status.service';

@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MonacoEditorModule,
    FormsModule,
    TextEditorOptionsComponent,
    TextSpinnerLoadingComponent
  ],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.css'
})

export class TextEditorComponent {

  
  onCodeChange($event: any) {
    this.textEditorService.setCode(this.code);
  }

  selectTemplate() {
    this.sidenavService.open();
  }
  
  constructor(
    private textEditorService: TextEditorService,
    private configurationService: ConfigurationService,
    private sidenavService: SidenavService,
    private loadingStatusService: LoadingStatusService
  ) { }

  show_Text_Editor :boolean= false;
  show_loading_spinner :boolean= false;
  code: string = '';
  language: string = 'dockerfile';


  ngOnInit(){
    this.loadingStatusService.getLoadingProduct().subscribe((status) => {
      this.show_loading_spinner = status;
    });

    this.configurationService.getConfiguration().subscribe((configuration) => {
      if (configuration !== '') {
        this.show_Text_Editor = true;
      }
    });

    //Subscribing to the service to get the code from the text editor
    this.textEditorService.getCode().subscribe((code: string) => {
      this.code = code;
    }); 

    //Subscribing to the service to get the language from the text editor
    this.textEditorService.getLanguage().subscribe((language: string) => {
      this.language = language;
    });

    (window as any).MonacoEnvironment = {
      getWorkerUrl: function (moduleId: any, label: string) {
        if (label === 'json') {
          //return './assets/monaco/min/vs/language/json/jsonWorker.js'; // Ruta a jsonWorker
        }
        if (label === 'dockefile') {
          //return './assets/monaco/min/vs/basic-languages/dockerfile/dockerfile.js'; 
        }
        return './assets/monaco/min/vs/editor/editor.worker.js'; 
      }
    };
  }

  public editorOptions = {
    theme: 'vs-dark',
    language: this.language,
    wordWrap: 'on',
    automaticLayout: true,
    code: this.code
  };
  

}
