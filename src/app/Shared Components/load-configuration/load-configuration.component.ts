import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatCard } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

import { JsonConfigurationService } from '../../Services/Components/json-configuration.service';
import { IconService } from '../../Services/icon.service';

@Component({
  selector: 'app-load-configuration',
  standalone: true,
  imports: [
    FormsModule,
    MatCard,
    MatButton,
    MatIconModule,
    MonacoEditorModule
    
  ],
  templateUrl: './load-configuration.component.html',
  styleUrl: './load-configuration.component.css',
  providers: [NgModule],
})
export class LoadConfigurationComponent {
  constructor(
    private jsonConfigurationService: JsonConfigurationService,
    private snakBar: MatSnackBar,
    private iconService: IconService
  ) {

  }

  private _code: string = '';
  public clipboardContent: string = '';
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
    this.jsonConfigurationService.updateStringValue(newValue);
  }

  readFromClipboard() {
    navigator.clipboard.readText()
      .then(text => {
        this.clipboardContent = text;
        this.code = text;
        //alert('Contenido leído del portapapeles: ' + text);
        this.snakBar.open('Contenido leído del portapapeles: ', 'Cerrar', {
          duration: 2000
        });
      })
      .catch(err => {
        this.snakBar.open('Error al leer del portapapeles: ' , 'Cerrar', {
          duration: 2000
        });
        //console.error('Error al leer del portapapeles: ', err);
      });
  }
  




}
