import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompetenciesComponent } from './competencies.component';
import { CompetenciesService } from '../../services/competencies.service';
import { PreloadImagesService } from '../../services/preload-images.service';
import { of } from 'rxjs'; // for mocking observables
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppModule } from '../../app.module'; // Ensure this is imported


describe('CompetenciesComponent', () => {
    let component: CompetenciesComponent;
    let fixture: ComponentFixture<CompetenciesComponent>;
    let competenciesServiceMock: Partial<CompetenciesService>;
    let preloadImagesServiceMock: Partial<PreloadImagesService>;

    const mockCompetencies = [
        {
            title: 'Competency 1',
            category: 'Category 1',
            logo: 'assets/logo1.png',
            level: 4,
            description: 'Description 1\nNew line here',
            certification: 'Certified 1',
        },
        {
            title: 'Competency 2',
            category: 'Category 1',
            logo: 'assets/logo2.png',
            level: 2,
            description: 'Description 2\nAnother new line',
            certification: '',
        },
        {
            title: 'Competency 3',
            category: 'Category 2',
            logo: 'assets/logo3.png',
            level: 5,
            description: 'Description 3\nYet another new line',
            certification: 'Certified 2',
        },
    ];

    beforeEach(() => {
        competenciesServiceMock = {
            getCompetencies: jest.fn().mockReturnValue(mockCompetencies),
        };

        preloadImagesServiceMock = {
            preloadImages: jest.fn(),
        };

        TestBed.configureTestingModule({
            declarations: [CompetenciesComponent],
            imports: [AppModule],  // Import the entire AppModule to make sure the pipe is available
            providers: [
                { provide: CompetenciesService, useValue: competenciesServiceMock },
                { provide: PreloadImagesService, useValue: preloadImagesServiceMock },
            ],
            schemas: [NO_ERRORS_SCHEMA], // Avoid errors due to missing components like app-header and app-footer
        });

        fixture = TestBed.createComponent(CompetenciesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges(); // Trigger change detection
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should call getCompetencies() on ngOnInit and populate competencies', () => {
        expect(component.competencies).toEqual(mockCompetencies);
        expect(component.filteredCompetencies).toEqual(mockCompetencies);
        expect(component.categories).toEqual(['Category 1', 'Category 2']);
    });

    it('should call preloadImages() with correct logo paths on ngOnInit', () => {
        expect(preloadImagesServiceMock.preloadImages).toHaveBeenCalledWith([
            'assets/logo1.png',
            'assets/logo2.png',
            'assets/logo3.png',
        ]);
    });

    it('should render competencies based on categories', () => {
        const categorySections = fixture.debugElement.queryAll(By.css('.category-section'));
        expect(categorySections.length).toBe(2); // Two categories: 'Category 1' and 'Category 2'
    });

    it('should filter competencies based on certification toggle', () => {
        // Initially, all competencies are displayed
        expect(component.filteredCompetencies.length).toBe(3);

        // Simulate toggle to show certified competencies only
        component.showCertifiedOnly = true;
        component.filterCompetencies();
        fixture.detectChanges();
        expect(component.filteredCompetencies.length).toBe(2); // Only certified competencies should be shown

        // Simulate toggle back to show all competencies
        component.showCertifiedOnly = false;
        component.filterCompetencies();
        fixture.detectChanges();
        expect(component.filteredCompetencies.length).toBe(3); // All competencies should be shown again
    });

    it('should toggle modal on card click and display competency details', () => {
        const competencyCards = fixture.debugElement.queryAll(By.css('.card'));
        competencyCards[0].nativeElement.click();
        fixture.detectChanges();
        expect(component.showDescription).toBe(true);
        expect(component.selectedCompetency).toEqual(mockCompetencies[0]);

        const closeButton = fixture.debugElement.query(By.css('.btn-secondary'));
        closeButton.nativeElement.click();
        fixture.detectChanges();
        expect(component.showDescription).toBe(false);
        expect(component.selectedCompetency).toBeNull();
    });

    it('should render competency description in the modal and show stars for level', () => {
        component.onCardClick('Category 1', mockCompetencies[0]);
        fixture.detectChanges();

        const modalDescription = fixture.debugElement.query(By.css('.popin-body p'));
        expect(modalDescription.nativeElement.innerHTML).toContain('<br>');
        expect(modalDescription.nativeElement.innerHTML).toContain('Description 1');

        const stars = fixture.debugElement.queryAll(By.css('.fa-star'));
        expect(stars.length).toBe(2); // 2 stars
    });

    it('should close the modal if clicked outside', () => {
        component.onCardClick('Category 1', mockCompetencies[0]);
        fixture.detectChanges();

        // Simulate a click outside the modal
        const documentClickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        });
        document.dispatchEvent(documentClickEvent);
        fixture.detectChanges();

        expect(component.showDescription).toBe(false);
    });

    it('should show the correct certification icon if competency is certified', () => {
        const competencyCards = fixture.debugElement.queryAll(By.css('.card'));
        competencyCards[0].nativeElement.click();
        fixture.detectChanges();

        const certificationIcon = fixture.debugElement.query(By.css('.fa-medal'));
        expect(certificationIcon).toBeTruthy();
    });

    it('should show level stars if competency is not certified', () => {
        const competencyCards = fixture.debugElement.queryAll(By.css('.card'));
        competencyCards[1].nativeElement.click();
        fixture.detectChanges();

        const stars = fixture.debugElement.queryAll(By.css('.fa-star'));
        expect(stars.length).toBe(4); // 4stars 
    });
});
