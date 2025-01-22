import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';
import { ProjectsService } from '../../services/projects.service';
import { PreloadImagesService } from '../../services/preload-images.service';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppModule } from '../../app.module'; // Ensure this is imported

describe('ProjectsComponent', () => {
    let component: ProjectsComponent;
    let fixture: ComponentFixture<ProjectsComponent>;
    let projectsServiceMock: jest.Mocked<ProjectsService>;
    let preloadImagesServiceMock: jest.Mocked<PreloadImagesService>;

    beforeEach(() => {
        projectsServiceMock = {
            getProjects: jest.fn().mockReturnValue([
                {
                    title: 'Test Project 1',
                    date: '2025',
                    domaine: 'Software Engineering',
                    involved_competencies: ['Development', 'Testing'],
                    image: 'assets/images/project1.png',
                    documents: [{ title: 'Document 1', url: 'assets/documents/project1.docx' }],
                    presentation: "presentation",
                    lancement: "lancement",
                    steps: "steps",
                    results: {
                        for_me: 'for me',
                        for_the_company: 'for the company'
                    },
                    stakeholders: 'stakeholders',
                    next_steps: 'next steps',
                    my_analysis: 'analysis'
                }
            ])
        };

        preloadImagesServiceMock = {
            preloadImages: jest.fn()
        };

        TestBed.configureTestingModule({
            declarations: [ProjectsComponent],
            imports: [AppModule],  // Import the entire AppModule to make sure the pipe is available
            providers: [
                { provide: ProjectsService, useValue: projectsServiceMock },
                { provide: PreloadImagesService, useValue: preloadImagesServiceMock }
            ],
            schemas: [NO_ERRORS_SCHEMA] // Ignore errors due to child components
        });

        fixture = TestBed.createComponent(ProjectsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should call getProjects from ProjectsService and set projects correctly', () => {
        component.ngOnInit();

        expect(projectsServiceMock.getProjects).toHaveBeenCalled();
        expect(component.projects).toEqual([
            {
                title: 'Test Project 1',
                date: '2025',
                domaine: 'Software Engineering',
                involved_competencies: ['Development', 'Testing'],
                image: 'assets/images/project1.png',
                documents: [{ title: 'Document 1', url: 'assets/documents/project1.docx' }],
                presentation: "presentation",
                lancement: "lancement",
                steps: "steps",
                results: {
                    for_me: 'for me',
                    for_the_company: 'for the company'
                },
                stakeholders: 'stakeholders',
                next_steps: 'next steps',
                my_analysis: 'analysis'
            }
        ]);
    });

    it('should call preloadImagesService.preloadImages with the correct images', () => {
        component.ngOnInit();

        expect(preloadImagesServiceMock.preloadImages).toHaveBeenCalledWith(['assets/images/project1.png']);
    });

    it('should render project details in the template', () => {
        component.ngOnInit();
        fixture.detectChanges();

        const projectTitle = fixture.debugElement.query(By.css('.timeline-title')).nativeElement.textContent;
        const projectDate = fixture.debugElement.query(By.css('.timeline-date')).nativeElement.textContent;
        const projectDomain = fixture.debugElement.query(By.css('.timeline-domain')).nativeElement.textContent;
        const projectImage = fixture.debugElement.query(By.css('.timeline-image')).nativeElement;

        expect(projectTitle).toBe('Test Project 1');
        expect(projectDate).toBe('2025');
        expect(projectDomain).toBe('Software Engineering');
        expect(projectImage.src).toContain('assets/images/project1.png');
    });

    it('should render competency badges correctly', () => {
        component.ngOnInit();
        fixture.detectChanges();

        const competencyBadges = fixture.debugElement.queryAll(By.css('.competency-badge'));
        expect(competencyBadges.length).toBe(2);
        expect(competencyBadges[0].nativeElement.textContent).toBe('Development');
        expect(competencyBadges[1].nativeElement.textContent).toBe('Testing');
    });
});
