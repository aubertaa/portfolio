import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { FontSizeService } from '../../services/font-size.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

constructor(public themeService: ThemeService,
            private fontSizeService: FontSizeService
            ) {}

  toggleTheme (): void {
    this.themeService.toggleTheme();
  }

  changeFontSize(size: 'small' | 'medium' | 'large'): void {
    this.fontSizeService.setFontSize(size);
  }
}
