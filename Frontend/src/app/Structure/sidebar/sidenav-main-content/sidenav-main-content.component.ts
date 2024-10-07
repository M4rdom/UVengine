import { Component } from '@angular/core';
import { TextEditorComponent } from '../../../Common Components/text-editor/text-editor.component';
import { UvlConfigurationComponent} from '../../../Common Components/uvl-configuration/uvl-configuration.component';
import { AngularSplitModule } from 'angular-split';

@Component({
  selector: 'app-sidenav-main-content',
  standalone: true,
  imports: [
    TextEditorComponent, 
    UvlConfigurationComponent,
    AngularSplitModule
  ],
  templateUrl: './sidenav-main-content.component.html',
  styleUrl: './sidenav-main-content.component.css'
})

export class SidenavMainContentComponent {

}
