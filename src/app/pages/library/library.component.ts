import { Component, HostListener } from '@angular/core';
import { LibraryService } from '../../services/library.service';

export interface Book {
  title: string;
  author: string;
  description: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-library',
  standalone: false,

  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
})
export class LibraryComponent {

  books: Book[] = [];
  categories: string[] = [];

  selectedBook: any = null;
  showDetails: boolean = false;

  constructor(private libraryService: LibraryService) {}

  getBooks (category: string) {
    return this.books.filter(book => book.category === category);
  }

  onBookClick(book: any) {
    // Toggle description visibility
    this.selectedBook = book;
    this.showDetails = true;
  }

  ngOnInit (): void {
    this.books = this.libraryService.getBooks();
    this.categories = this.books.map(book => book.category)
      .filter((category, index, categories) => categories.indexOf(category) === index);
  }

  closeModal() {
    // Close the modal by resetting selectedCompetency
    this.showDetails = false;
    this.selectedBook = null;
  }

  // Close modal if clicked outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const modalElement = document.querySelector('.popin-modal');
    if (modalElement && !modalElement.contains(event.target as Node)) {
      this.closeModal();
    }
  }
}
