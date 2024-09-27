import { Injectable } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class IconRegistryService {

  constructor(
    private maticonRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer
  ) {
    this.registerIcons();
  }

  private registerIcons(): void {
    const icons = [
      { name: 'github-black', path: 'assets/icons/github-black.svg' },
      { name: 'github-white', path: 'assets/icons/github-white.svg' },
      // Agrega más íconos aquí
    ];

    icons.forEach(icon => {
      this.maticonRegistry.addSvgIcon(
        icon.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    });
  }
}
