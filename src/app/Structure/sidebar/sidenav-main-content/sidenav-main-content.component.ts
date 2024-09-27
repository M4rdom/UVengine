import { Component } from '@angular/core';
import { TextEditorComponent } from '../../../Common Components/text-editor/text-editor.component';
import { UvlConfigurationComponent} from '../../../Common Components/uvl-configuration/uvl-configuration.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav-main-content',
  standalone: true,
  imports: [
    TextEditorComponent, 
    UvlConfigurationComponent,
    MatSidenavModule,
    LayoutModule],
  templateUrl: './sidenav-main-content.component.html',
  styleUrl: './sidenav-main-content.component.css'
})

export class SidenavMainContentComponent {

}
