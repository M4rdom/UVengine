import { Component } from '@angular/core';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [
    MonacoEditorModule
  ],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.css'
})

export class TextEditorComponent {
  public editorOptions = {
    theme: 'vs-dark',
    language: 'dockerfile',
    wordWrap: 'on',
    automaticLayout: true,
  };
}
