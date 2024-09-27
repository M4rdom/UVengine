import { Component, ViewChild, ChangeDetectorRef  } from '@angular/core';
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
  constructor(private cd: ChangeDetectorRef) { }

  @ViewChild('monaco', { static: false }) monaco!: MonacoEditorModule;
  code: string = 'Perro sanches eres el peor';

  ngAfterViewInit() {
    
  }

  changeEditorContent() {
    
  }


  public editorOptions = {
    theme: 'vs-dark',
    language: 'dockerfile',
    wordWrap: 'on',
    automaticLayout: true,
    code: this.code
  };

}
