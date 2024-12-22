import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibraryComponent } from './library.component';
import { LibraryService } from '../../services/library.service';
import { PreloadImagesService } from '../../services/preload-images.service';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AppModule } from '../../app.module'; // Ensure this is imported

class MockLibraryService {
  getBooks () {
    return [
      { title: 'Book 1', author: 'Author 1', description: 'Description 1', category: 'Fiction', image: 'book1.jpg' },
      { title: 'Book 2', author: 'Author 2', description: 'Description 2', category: 'Non-Fiction', image: 'book2.jpg' },
      { title: 'Book 3', author: 'Author 3', description: 'Description 3', category: 'Fiction', image: 'book3.jpg' }
    ];
  }
}

class MockPreloadImagesService {
  preloadImages (images: string[]) {
    // Mock the image preloading functionality
    console.log('Preloading images:', images);
  }
}

describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;
  let libraryService: MockLibraryService;
  let preloadImagesService: MockPreloadImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibraryComponent],
      imports: [AppModule],  // Import the entire AppModule to make sure the pipe is available
      providers: [
        { provide: LibraryService, useClass: MockLibraryService },
        { provide: PreloadImagesService, useClass: MockPreloadImagesService }
      ]
    });

    fixture = TestBed.createComponent(LibraryComponent);
    component = fixture.componentInstance;
    libraryService = TestBed.inject(LibraryService);
    preloadImagesService = TestBed.inject(PreloadImagesService);
    fixture.detectChanges(); // Trigger change detection to populate the template
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize books and categories correctly', () => {
    component.ngOnInit();

    expect(component.books.length).toBe(3);
    expect(component.categories.length).toBe(2); // Fiction and Non-Fiction
  });

  it('should render books based on categories', () => {
    component.ngOnInit();
    fixture.detectChanges();

    const fictionBooks = fixture.debugElement.queryAll(By.css('.category-section .card')).filter(card =>
      card.nativeElement.querySelector('.card-title').textContent.trim() === 'Book 1' ||
      card.nativeElement.querySelector('.card-title').textContent.trim() === 'Book 3'
    );

    const nonFictionBooks = fixture.debugElement.queryAll(By.css('.category-section .card')).filter(card =>
      card.nativeElement.querySelector('.card-title').textContent.trim() === 'Book 2'
    );

    expect(fictionBooks.length).toBe(2); // Two books in Fiction category
    expect(nonFictionBooks.length).toBe(1); // One book in Non-Fiction category
  });

  it('should display the correct book details when a book is clicked', () => {
    component.ngOnInit();
    fixture.detectChanges();

    const bookCard = fixture.debugElement.query(By.css('.category-section .card'));
    bookCard.triggerEventHandler('click', null); // Simulate book click
    fixture.detectChanges();

    expect(component.selectedBook.title).toBe('Book 1');

    const modal = fixture.debugElement.query(By.css('.modal-content'));
    expect(modal).toBeTruthy();
    expect(modal.query(By.css('h4')).nativeElement.textContent).toContain('Book 1');
  });

  it('should close the modal when close button is clicked', () => {
    component.selectedBook = { title: 'Book 1', author: 'Author 1', description: 'Description 1', category: 'Fiction', image: 'book1.jpg' };
    component.showDetails = true;
    fixture.detectChanges();

    const closeButton = fixture.debugElement.query(By.css('.modal-footer .btn'));
    closeButton.triggerEventHandler('click', null); // Simulate close button click
    fixture.detectChanges();

    expect(component.showDetails).toBeFalsy();
  });

  it('should close the modal when clicked outside of it', () => {
    component.selectedBook = { title: 'Book 1', author: 'Author 1', description: 'Description 1', category: 'Fiction', image: 'book1.jpg' };
    component.showDetails = true;
    fixture.detectChanges();

    // Simulate click outside modal
    const backdrop = fixture.debugElement.query(By.css('.modal-backdrop'));
    backdrop.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.showDetails).toBeFalsy();
  });

  it('should call preloadImagesService when ngOnInit is called', () => {
    const preloadImagesSpy = jest.spyOn(preloadImagesService, 'preloadImages');
    component.ngOnInit();

    expect(preloadImagesSpy).toHaveBeenCalledWith(['book1.jpg', 'book2.jpg', 'book3.jpg']);
  });

});
