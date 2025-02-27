import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { ThemeService } from '../../services/theme.service';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs'; // to mock the service's observable behavior

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let themeServiceMock: Partial<ThemeService>;

    beforeEach(() => {
        // Mock ThemeService
        themeServiceMock = {
            isLightTheme: true, // Default to true, but you can change in individual tests
            toggleTheme: jest.fn(), // Mock toggleTheme method
        };

        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            providers: [
                { provide: ThemeService, useValue: themeServiceMock }
            ]
        });

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges(); // Trigger change detection
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should apply "light-theme" class when themeService.isLightTheme is true', () => {
        const headerElement: HTMLElement = fixture.nativeElement.querySelector('header');
        expect(headerElement.classList.contains('light-theme')).toBe(true);
    });

    it('should not apply "light-theme" class when themeService.isLightTheme is false', () => {
        themeServiceMock.isLightTheme = false; // Change mock value
        fixture.detectChanges(); // Re-trigger change detection

        const headerElement: HTMLElement = fixture.nativeElement.querySelector('header');
        expect(headerElement.classList.contains('light-theme')).toBe(false);
    });

    it('should call toggleTheme() method when theme toggle button is clicked', () => {
        const toggleButton = fixture.debugElement.query(By.css('#theme-toggle'));
        toggleButton.triggerEventHandler('click', null); // Simulate the click event

        expect(themeServiceMock.toggleTheme).toHaveBeenCalled();
    });

    it('should render all navigation links correctly', () => {
        const links = fixture.nativeElement.querySelectorAll('a.nav-link');

        expect(links.length).toBe(8); // There should be 6 links
    });
});
