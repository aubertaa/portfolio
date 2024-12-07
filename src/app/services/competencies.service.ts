import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompetenciesService {
  getCompetencies () {

    return [
      { title: 'Agility', level: 5, description: 'Scrum Master, Agile Member, etc.' },
      { title: 'Software Testing', level: 4, description: 'ISTQB, Test Automation, etc.' },
      { title: 'DevOps', level: 3, description: 'AWS, Docker, Kubernetes, etc.' },
      // Add more as required
    ];

  }

  constructor() { }
}
