import { Component } from '@angular/core';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@Component({
  selector: 'app-json-viewer',
  standalone: true,
  imports: [NgxJsonViewerModule],
  templateUrl: './json-viewer.component.html',
  styleUrl: './json-viewer.component.css'
})
export class JsonViewerComponent {
  json = {
    "file": "Dockerfile_fm.uvl",
    "config": {
      "Frontend": true,
      "Framework": true,
      "Angular": true,
      "Custom_Compiled_Version": false,
      "WebServer_Frontend": true,
      "Apache_WebServer_Frontend": false,
      "Nginx_WebServer_Frontend": true,
      "Custom_nginx_config_file_Frontend": false
    }
  }
}
