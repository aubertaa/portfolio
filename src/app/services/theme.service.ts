import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isLightTheme = false;

  constructor() {}
  

  toggleTheme (): void {
    this.isLightTheme = !this.isLightTheme;
    document.body.classList.toggle('light-theme', this.isLightTheme);

    const header = document.querySelector('header');
    if (header) {
      header.classList.toggle('light-theme', this.isLightTheme);
    }

    const navmenu = document.querySelector('header nav');
    if (navmenu) {
      navmenu.classList.toggle('light-theme', this.isLightTheme);
    }

    const footer = document.querySelector('footer');
    if (footer) {
      footer.classList.toggle('light-theme', this.isLightTheme);
    }

    // Change favicon
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.setAttribute('href', this.isLightTheme ? 'favicon-light.ico' : 'favicon.ico');
    }
  }
}
