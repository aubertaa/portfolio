import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

constructor(public themeService: ThemeService) {}

  toggleTheme (): void {
    this.themeService.toggleTheme();
  }
}
