import { TestBed } from '@angular/core/testing';
import { LibraryService } from './library.service';

describe('LibraryService', () => {
  let service: LibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of books', () => {
    const books = service.getBooks();
    expect(books).toBeTruthy();  // Ensure it returns something
    expect(books.length).toBeGreaterThan(0);  // Ensure the list is not empty
  });

  it('should return books with correct properties', () => {
    const books = service.getBooks();
    const firstBook = books[0];

    expect(firstBook.title).toBeDefined();
    expect(firstBook.author).toBeDefined();
    expect(firstBook.description).toBeDefined();
    expect(firstBook.image).toBeDefined();
    expect(firstBook.category).toBeDefined();
    expect(firstBook.avis).toBeDefined();
  });

  it('should handle books with multiline descriptions', () => {
    const books = service.getBooks();
    const firstBook = books[0];

    expect(firstBook.description).toContain('\n');  // Ensure description contains newline characters
  });

  it('should return books with valid categories', () => {
    const books = service.getBooks();
    const validCategories = ['Ingénierie logicielle', 'Management / organisation'];

    books.forEach(book => {
      expect(validCategories).toContain(book.category);
    });
  });

  it('should return books with non-empty "avis" field', () => {
    const books = service.getBooks();

    books.forEach(book => {
      expect(book.avis).toBeTruthy();  // Ensure "avis" field is not empty
    });
  });
});
