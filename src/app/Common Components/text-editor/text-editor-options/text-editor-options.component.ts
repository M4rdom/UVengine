import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';


//Service 
import { TextEditorContentManagerService } from '../../../Services/text-editor-content-manager.service';

@Component({
  selector: 'app-text-editor-options',
  standalone: true,
  imports: [MatButton],
  templateUrl: './text-editor-options.component.html',
  styleUrl: './text-editor-options.component.css'
})
export class TextEditorOptionsComponent {
  constructor(
    private textEditorContentManagerService:TextEditorContentManagerService
  ){

  }
  
  changeEditorContent() {
    this.textEditorContentManagerService.changeCode("ñlaskjdfñalksdjf")
  }
}
