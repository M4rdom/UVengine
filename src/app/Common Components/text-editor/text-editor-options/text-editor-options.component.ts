import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

//Service 
import { TextEditorService } from '../../../Services/Components/text-editor.service';
import { firstValueFrom } from 'rxjs';
import { ConfigurationService } from '../../../Services/configuration.service';
import { IconService } from '../../../Services/icon.service';

@Component({
  selector: 'app-text-editor-options',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButton,
    MatCardModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './text-editor-options.component.html',
  styleUrl: './text-editor-options.component.css'
})
export class TextEditorOptionsComponent {


  file_name: string ='';
  selected_language: string = 'dockerfile';
  Languages = ['dockerfile', 'json'];

  constructor(
    private textEditorService: TextEditorService,
    private snackBar: MatSnackBar,
    private configurationService: ConfigurationService,
    private iconService: IconService
  ) { }

  async ngOnInit() {
    this.file_name = await firstValueFrom(this.configurationService.getConfiguration());
  }

  async copytoclipboard() {
    if(navigator.clipboard){
      const code = await firstValueFrom(this.textEditorService.getCode());
      navigator.clipboard.writeText(code).then(() => {
        //alert(code);
        this.snackBar.open('Code Copied to Clipboard', 'Close', {
          duration: 2000,
        });
      }).catch((err)=>{

      });}
    }

    async downloadproduct() {
      var fileName = 'final_product.txt';

      if (this.file_name) {
        fileName = this.file_name;
      }
      
      const code = await firstValueFrom(this.textEditorService.getCode());
      const blob = new Blob([code], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }
    

    changeSelectedlanguage(language: string) {
      this.textEditorService.setLanguage(language);
      this.selected_language = language;
    }

  
  
}
