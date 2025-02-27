import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [RouterTestingModule], // Import RouterTestingModule to handle [routerLink] in the template
        });

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges(); // Trigger change detection to populate the template
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have a sections array with 6 sections', () => {
        expect(component.sections.length).toBe(6);
    });

    it('should render section titles and descriptions', () => {
        const sectionElements = fixture.debugElement.queryAll(By.css('.link-card'));

        expect(sectionElements.length).toBe(component.sections.length); // Ensure each section is rendered
        sectionElements.forEach((sectionElement, index) => {
            const title = sectionElement.query(By.css('.content p')).nativeElement.textContent.trim();
            const description = component.sections[index].description;
            expect(title).toBe(description); // Check if the section description matches
        });
    });
    it('should display the correct profile image', () => {
        const profilePic = fixture.debugElement.query(By.css('.profile-pic')).nativeElement;
        expect(profilePic.getAttribute('src')).toBe('AUBERTAlexandre.jpg');
        expect(profilePic.getAttribute('alt')).toBe('Profile Picture');
    });

    it('should display the correct header and sub-header', () => {
        const header = fixture.debugElement.query(By.css('h1')).nativeElement.textContent.trim();
        const subHeader = fixture.debugElement.query(By.css('h2')).nativeElement.textContent.trim();

        expect(header).toBe('Bienvenue sur mon Portfolio');
        expect(subHeader).toBe('Head of software engineering - Piano Analytics');
    });
});
