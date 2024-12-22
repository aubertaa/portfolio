import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { ThemeService } from '../../services/theme.service';
import { of } from 'rxjs'; // to mock the service's observable behavior

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;
    let themeServiceMock: Partial<ThemeService>;

    beforeEach(() => {
        // Mock ThemeService
        themeServiceMock = {
            isLightTheme: true, // Default to true, but you can change in individual tests
        };

        TestBed.configureTestingModule({
            declarations: [FooterComponent],
            providers: [
                { provide: ThemeService, useValue: themeServiceMock }
            ]
        });

        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges(); // Trigger change detection
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should apply "light-theme" class when themeService.isLightTheme is true', () => {
        const footerElement: HTMLElement = fixture.nativeElement.querySelector('.footer');
        expect(footerElement.classList.contains('light-theme')).toBe(true);
    });

    it('should not apply "light-theme" class when themeService.isLightTheme is false', () => {
        themeServiceMock.isLightTheme = false; // Change mock value
        fixture.detectChanges(); // Re-trigger change detection

        const footerElement: HTMLElement = fixture.nativeElement.querySelector('.footer');
        expect(footerElement.classList.contains('light-theme')).toBe(false);
    });

    it('should contain LinkedIn, GitHub, and Medium links', () => {
        const linkedinLink: HTMLAnchorElement = fixture.nativeElement.querySelector('a[aria-label="LinkedIn"]');
        const githubLink: HTMLAnchorElement = fixture.nativeElement.querySelector('a[aria-label="GitHub"]');
        const mediumLink: HTMLAnchorElement = fixture.nativeElement.querySelector('a[aria-label="Medium"]');

        expect(linkedinLink).toBeTruthy();
        expect(linkedinLink.href).toContain('https://www.linkedin.com/in/alexandreaubertqa');

        expect(githubLink).toBeTruthy();
        expect(githubLink.href).toContain('https://github.com/aubertaa/');

        expect(mediumLink).toBeTruthy();
        expect(mediumLink.href).toContain('https://medium.com/@alexandre.aubert');
    });

});
