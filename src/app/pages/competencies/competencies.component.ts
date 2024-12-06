import { Component } from '@angular/core';

@Component({
  selector: 'app-competencies',
  templateUrl: './competencies.component.html',
  styleUrl: './competencies.component.scss'
})
export class CompetenciesComponent {
  competencies = [
    { title: 'Agility', description: 'Scrum Master, Agile Member, etc.' },
    { title: 'Software Testing', description: 'ISTQB, Test Automation, etc.' },
    { title: 'DevOps', description: 'AWS, Docker, Kubernetes, etc.' },
    // Add more as required
  ];

}
