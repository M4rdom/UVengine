import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatCard } from '@angular/material/card';


import { UploadWidgetResult, UploadWidgetOnUpdateEvent } from '@bytescale/upload-widget';
import { UploadWidgetModule } from '@bytescale/upload-widget-angular';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

import { JsonConfigurationService } from '../../Services/json-configuration.service';

@Component({
  selector: 'app-load-configuration',
  standalone: true,
  imports: [
    FormsModule,
    MatCard,
    UploadWidgetModule,
    MonacoEditorModule
    
  ],
  templateUrl: './load-configuration.component.html',
  styleUrl: './load-configuration.component.css',
  providers: [NgModule],
})
export class LoadConfigurationComponent {
  constructor(private jsonConfigurationService: JsonConfigurationService) {

  }

  options = {
    apiKey: 'free', 
    multi: false,
    showFinishButton: true,
  };

  onUpdate = (event: UploadWidgetOnUpdateEvent) => {
    console.log(JSON.stringify(event));
  };

  onComplete = (files: UploadWidgetResult[]) => {
    alert(files.map((x) => x.fileUrl).join('\n'));
  };
  width = '200px';
  height = '200px';














  private _code: string = '';

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    if (this._code !== value) {
      this._code = value;
      this.onCodeChange(value);
    }
  }

  onCodeChange(newValue: string): void {
    //console.log('El valor de code ha cambiado:', newValue);
    this.jsonConfigurationService.updateStringValue(newValue);
  }
  


  public editorOptions = {
    theme: 'vs-dark',
    language: 'json',
    wordWrap: 'off',
    automaticLayout: true,
    code: this.code
    
  };

}
