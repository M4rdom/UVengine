import { Component  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

import { MatCardModule } from '@angular/material/card';


import { TextEditorOptionsComponent } from './text-editor-options/text-editor-options.component';


// Services
import { TextEditorContentManagerService } from '../../Services/text-editor-content-manager.service';

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
  constructor(private textEditorContentManagerService:TextEditorContentManagerService) { }

  code: string = '';

  ngOnInit(){
    this.textEditorContentManagerService.currentCode.subscribe(code => this.code = code);
  }

  public editorOptions = {
    theme: 'vs-dark',
    language: 'dockerfile',
    wordWrap: 'on',
    automaticLayout: true,
    code: this.code
  };

}
