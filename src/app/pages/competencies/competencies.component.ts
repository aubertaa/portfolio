import { Component, OnInit } from '@angular/core';
import { CompetenciesService } from '../../services/competencies.service';
@Component({
  selector: 'app-competencies',
  templateUrl: './competencies.component.html',
  styleUrl: './competencies.component.scss'
})
export class CompetenciesComponent implements OnInit {
  competencies: {
    title: string;
    category: string;
    logo: string;
    level: number;
    description: string;
    certification: string;
  }[] = [];

constructor(private competenciesService: CompetenciesService) { }


  activeCompetency: any = null;

  showDetails (competency: any): void {
    this.activeCompetency = competency;
  }

  hideDetails (): void {
    this.activeCompetency = null;
  }

  ngOnInit (): void {
    this.competencies = this.competenciesService.getCompetencies();
  }

}
