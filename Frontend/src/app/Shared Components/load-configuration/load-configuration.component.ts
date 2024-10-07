import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatCard } from '@angular/material/card';


import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

import { JsonConfigurationService } from '../../Services/Components/json-configuration.service';

@Component({
  selector: 'app-load-configuration',
  standalone: true,
  imports: [
    FormsModule,
    MatCard,
    MonacoEditorModule
    
  ],
  templateUrl: './load-configuration.component.html',
  styleUrl: './load-configuration.component.css',
  providers: [NgModule],
})
export class LoadConfigurationComponent {
  constructor(private jsonConfigurationService: JsonConfigurationService) {

  }

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
    code: this.code,
    minimap: {
      enabled: false // Desactiva el minimap si está activado
    }
  };

}
