import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkModeClass = 'dark-mode';

  constructor() {
    this.initializeTheme();
  }

  toggleTheme(isDarkMode: boolean): void {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add(this.darkModeClass);
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove(this.darkModeClass);
      localStorage.setItem('theme', 'light');
    }
  }

  private initializeTheme(): void {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.body.classList.add(this.darkModeClass);
    } else {
      document.body.classList.remove(this.darkModeClass);
    }
  }

  isDarkMode(): boolean {
    return document.body.classList.contains(this.darkModeClass);
  }
}

