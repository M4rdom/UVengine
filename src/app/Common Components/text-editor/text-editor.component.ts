import { Component  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

import { MatCardModule } from '@angular/material/card';


import { TextEditorOptionsComponent } from './text-editor-options/text-editor-options.component';
import { TextEditorService } from '../../Services/Components/text-editor.service';
import { BehaviorSubject } from 'rxjs';

// Services

@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [
    MatCardModule,
    MonacoEditorModule,
    FormsModule,
    TextEditorOptionsComponent
  ],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.css'
})

export class TextEditorComponent {
  
  onCodeChange($event: any) {
    this.textEditorService.setCode(this.code);
  }
  
  constructor(
    private textEditorService: TextEditorService
  ) { }


  code: string = '';
  language: string = 'dockerfile';

  ngOnInit(){
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
