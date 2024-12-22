import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AchievementsComponent } from './achievements.component';
import { AchievementsService } from '../../services/achievements.service';
import { PreloadImagesService } from '../../services/preload-images.service';
import { of } from 'rxjs'; // for mocking observables
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppModule } from '../../app.module'; // Ensure this is imported

describe('AchievementsComponent', () => {
  let component: AchievementsComponent;
  let fixture: ComponentFixture<AchievementsComponent>;
  let achievementsServiceMock: Partial<AchievementsService>;
  let preloadImagesServiceMock: Partial<PreloadImagesService>;

  const mockAchievements = [
    {
      title: 'Achievement 1',
      place: 'Place 1',
      date: '2024-01-01',
      type: 'Conférence',
      description: 'Description 1\nNew line here',
      links: [{ title: 'Link 1', url: 'http://example.com' }]
    },
    {
      title: 'Achievement 2',
      place: 'Place 2',
      date: '2024-02-01',
      type: 'Publication',
      description: 'Description 2\nAnother new line',
      links: [{ title: 'Link 2', url: 'http://example.com' }]
    },
  ];

  beforeEach(() => {
    achievementsServiceMock = {
      getAchievements: jest.fn().mockReturnValue(mockAchievements)
    };

    preloadImagesServiceMock = {
      preloadImages: jest.fn()
    };

    TestBed.configureTestingModule({
      declarations: [AchievementsComponent],
      imports: [AppModule],  // Import the entire AppModule to make sure the pipe is available
      providers: [
        { provide: AchievementsService, useValue: achievementsServiceMock },
        { provide: PreloadImagesService, useValue: preloadImagesServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA] // Avoid errors due to missing components like app-header and app-footer
    });

    fixture = TestBed.createComponent(AchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAchievements() on ngOnInit and populate achievements', () => {
    expect(component.achievements).toEqual(mockAchievements);
    expect(component.filteredAchievements).toEqual(mockAchievements);
    expect(component.types).toEqual(['Conférence', 'Publication']);
  });

  it('should call preloadImages() with correct image paths on ngOnInit', () => {
    expect(preloadImagesServiceMock.preloadImages).toHaveBeenCalledWith([
      'assets/achievements/tv-screen.png',
      'assets/achievements/book.png',
      'assets/achievements/school.png'
    ]);
  });

  it('should render the correct number of sections based on types', () => {
    const sections = fixture.debugElement.queryAll(By.css('.category-section'));
    expect(sections.length).toBe(2); // Two types: Conférence and Publication
  });

  it('should render achievements for each type', () => {
    const cards = fixture.debugElement.queryAll(By.css('.card'));
    expect(cards.length).toBe(2); // Two achievements should be rendered
  });

  it('should display the correct image for each achievement type', () => {
    const imageElements = fixture.debugElement.queryAll(By.css('.achievement-image'));
    expect(imageElements[0].nativeElement.src).toContain('assets/achievements/tv-screen.png');
    expect(imageElements[1].nativeElement.src).toContain('assets/achievements/book.png');
  });

  it('should display the correct links for each achievement', () => {
    const linkElements = fixture.debugElement.queryAll(By.css('.card-footer .btn-link'));
    expect(linkElements.length).toBe(2); // Two links, one for each achievement
    expect(linkElements[0].nativeElement.href).toContain('http://example.com');
    expect(linkElements[1].nativeElement.href).toContain('http://example.com');
  });

  it('should transform newlines in descriptions into <br> tags using the newlineToBr pipe', () => {
    const descriptionElement = fixture.debugElement.query(By.css('.card-text'));
    expect(descriptionElement.nativeElement.innerHTML).toContain('<br>');
    expect(descriptionElement.nativeElement.innerHTML).toContain('Description 1');
  });

  it('should filter achievements based on type when getAchievements() is called', () => {
    const filteredConf = component.getAchievements('Conférence');
    expect(filteredConf.length).toBe(1);
    expect(filteredConf[0].type).toBe('Conférence');

    const filteredPub = component.getAchievements('Publication');
    expect(filteredPub.length).toBe(1);
    expect(filteredPub[0].type).toBe('Publication');
  });
});
