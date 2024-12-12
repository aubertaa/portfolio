import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

    isLightTheme = false;

    toggleTheme (): void {
      this.isLightTheme = !this.isLightTheme;
      document.body.classList.toggle('light-theme', this.isLightTheme);
      const header = document.querySelector('header');
      if (header) {
        header.classList.toggle('light-theme', this.isLightTheme);
      }
      
    }
}
