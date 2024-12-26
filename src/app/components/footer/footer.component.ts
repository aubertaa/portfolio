import { AfterViewInit, Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterViewInit {
  constructor(public themeService: ThemeService) { }

  ngAfterViewInit (): void {
    this.loadEcoindexBadgeScript();
  }

  loadEcoindexBadgeScript (): void {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/cnumr/ecoindex_badge@3/assets/js/ecoindex-badge.js';
    script.defer = true;
    document.body.appendChild(script);
  }
}
