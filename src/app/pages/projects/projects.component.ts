import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { PreloadImagesService } from '../../services/preload-images.service';

export interface Project {
  title: string;
  date: string;
  domaine: string;
  involved_competencies: string[];
  image: string;
  documents: {
    title: string;
    url: string;
  }[];
  description: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{

  projects: Project[] = [];

  constructor(private projectsService: ProjectsService,
              private preloadImagesService: PreloadImagesService
  ) { }

  getProjects() {
    return this.projectsService.getProjects();
  }

  ngOnInit (): void {

    this.projects = this.projectsService.getProjects();

    // Preload images for the upcoming page
    const imagesToPreload = this.projects.map(project => project.image);
    this.preloadImagesService.preloadImages(imagesToPreload);

  }

}
