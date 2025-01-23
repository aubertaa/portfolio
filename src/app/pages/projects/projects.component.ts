import { Component, HostListener, OnInit } from '@angular/core';
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
  presentation: string;
  lancement: string;
  steps: string;
  results: {
    for_me: string;
    for_the_company: string;
  },
  stakeholders: string;
  next_steps: string;
  my_analysis: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{

  projects: Project[] = [];

  selectedProject: any = null;
  showDescription: boolean = false;

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

  onCardClick (project: any) {
    // Toggle description visibility
    this.showDescription = !this.showDescription;
    this.selectedProject = project;

  }


  closeModal () {
    // Close the modal by resetting selectedCompetency
    this.showDescription = false;
    this.selectedProject = null;
  }


  // Close modal if clicked outside
  @HostListener('document:click', ['$event'])
  onDocumentClick (event: MouseEvent) {
    const modalElement = document.querySelector('.popin-modal');
    if (modalElement && !modalElement.contains(event.target as Node)) {
      this.closeModal();
    }
  }


}
