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
        description: 'The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations',
        image: 'books/Accelerate.png',
        category: 'Ingénierie logicielle'
      },
      {
        title: 'Dynamic Reteaming',
        author: 'Heidi Helfand',
        description: '',
        image: 'books/Dynamic Reteaming.png',
        category: 'Management / organisation'
      },
      {
        title: 'Team Topologies',
        author: 'Matthew Skelton, Manuel Pais, Ruth Malan',
        description: '',
        image: 'books/Team Topologies.png',
        category: 'Management / organisation'
      },
      {
        title: 'Scrum Guide',
        author: 'Ken Schwaber, Jeff Sutherland',
        description: '',
        image: 'books/scrum_guide.png',
        category: 'Ingénierie logicielle'
      },
      {
        title: 'Refactoring',
        author: 'Martin Fowler',
        description: '',
        image: 'books/Refactoring.png',
        category: 'Ingénierie logicielle'
      },
      {
        title: 'Measure what matters',
        author: 'John Doerr',
        description: '',
        image: 'books/Measure What Matters.png',
        category: 'Ingénierie logicielle'
      },
      {
        title: 'Management 3.0',
        author: 'Jurgen Appelo',
        description: '',
        image: 'books/Management 3.0.png',
        category: 'Management / organisation'
      },
      {
        title: 'L\'entreprise libérée',
        author: 'Isaac Getz',
        description: '',
        image: 'books/L\'Entreprise libérée.png',
        category: 'Management / organisation'
      },
      {
        title: 'How to change the world',
        author: 'Jurgen Appelo',
        description: '',
        image: 'books/How to Change the World.png',
        category: 'Management / organisation'
      }
    ]
  }


  constructor() { }
}
