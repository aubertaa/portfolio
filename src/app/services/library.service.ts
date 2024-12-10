import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  getBooks () {
    return [
      {
        title: 'Accelerate',
        author: 'Nicole Forsgren, Jez Humble, Gene Kim',
        image: ''
      },
      {
        title: 'Dynamic Reteaming',
        author: 'Heidi Helfand',
        image: ''
      },
      {
        title: 'Team Topologies',
        author: 'Matthew Skelton, Manuel Pais, Ruth Malan',
        image: ''
      },
      {
        title: 'Scrum Guide',
        author: 'Ken Schwaber, Jeff Sutherland',
        image: ''
      },
      {
        title: 'Refactoring',
        author: 'Martin Fowler',
        image: ''
      },
      {
        title: 'Measure what matters',
        author: 'John Doerr',
        image: ''
      },
      {
        title: 'Management 3.0',
        author: 'Jurgen Appelo',
        image: ''
      },
      {
        title: 'L\'entreprise libérée',
        author: 'Isaac Getz',
        image: ''
      },
      {
        title: 'How to change the world',
        author: 'Jurgen Appelo',
        image: ''
      }
    ]
  }

  constructor() { }
}
