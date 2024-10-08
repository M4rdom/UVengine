import { Component } from '@angular/core';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-text-spinner-loading',
  standalone: true,
  imports: [
    MatProgressSpinnerModule
  ],
  templateUrl: './text-spinner-loading.component.html',
  styleUrl: './text-spinner-loading.component.css'
})
export class TextSpinnerLoadingComponent {

}
