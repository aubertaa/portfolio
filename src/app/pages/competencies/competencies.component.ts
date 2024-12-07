import { Component } from '@angular/core';
import { CompetenciesService } from '../../services/competencies.service';

@Component({
  selector: 'app-competencies',
  templateUrl: './competencies.component.html',
  styleUrl: './competencies.component.scss'
})
export class CompetenciesComponent {

constructor(private competenciesService: CompetenciesService) { }

getCompetencies() {
  return this.competenciesService.getCompetencies();
 }


}
