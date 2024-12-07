import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects () {

    return [
      {
        title: 'Agility', involved_competencies: [
          "Scrum Master",
          "Agile Member"
        ], description: 'Scrum Master, Agile Member, etc.'
      },
      {
        title: 'Software Testing', involved_competencies: [
          "Scrum Master",
          "Agile Member"
        ], level: 4, description: 'ISTQB, Test Automation, etc.'
      },
      {
        title: 'DevOps', involved_competencies: [
          "Scrum Master",
          "Agile Member"
        ], level: 3, description: 'AWS, Docker, Kubernetes, etc.'
      },
      // Add more as required
    ];

  }

}
