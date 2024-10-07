import { Component } from '@angular/core';

import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';

//Service 
import { TextEditorService } from '../../../Services/Components/text-editor.service';
import { firstValueFrom } from 'rxjs';
import { ConfigurationService } from '../../../Services/configuration.service';

@Component({
  selector: 'app-text-editor-options',
  standalone: true,
  imports: [
    MatButton,
    MatCardModule
  ],
  templateUrl: './text-editor-options.component.html',
  styleUrl: './text-editor-options.component.css'
})
export class TextEditorOptionsComponent {
  
  constructor(
    private textEditorService: TextEditorService,
    private snackBar: MatSnackBar,
    private configurationService: ConfigurationService
  ) { }
  ngOnInit() {
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
      const fileName = 'final_product.txt';
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

  
  
}
