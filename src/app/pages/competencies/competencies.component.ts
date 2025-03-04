import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetenciesService } from '../../services/competencies.service';
import { PreloadImagesService } from '../../services/preload-images.service';



export interface Competency {
  title: string;
  category: string;
  logo: string;
  level: number;
  definition: string;
  facts:string;
  evaluation: string;
  certification: string;
}
@Component({
  selector: 'app-competencies',
  templateUrl: './competencies.component.html',
  styleUrl: './competencies.component.scss'
})
export class CompetenciesComponent implements OnInit {

  competencies: Competency[] = [];
  filteredCompetencies: Competency[] = [];

  categories: string[] = [];
  showCertifiedOnly: boolean = false;  // Toggle state for filtering

  constructor(private competenciesService: CompetenciesService,
    private preloadImagesService: PreloadImagesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit (): void {

    this.competencies = this.competenciesService.getCompetencies();
    this.filteredCompetencies = this.competencies;
    this.categories = this.competencies.map(competency => competency.category)
      .filter((category, index, categories) => categories.indexOf(category) === index);

    // Preload images for the upcoming page
    const logosToPreload = this.competencies.map(competency => competency.logo);
    this.preloadImagesService.preloadImages(logosToPreload);

    this.route.paramMap.subscribe(params => {
      const competencyId = params.get('id');
      if (competencyId) {
        this.openCompetencyById(competencyId);
      }
    });
  }

  selectedCompetency: any = null;
  selectedCategory: any = null;
  showDescription: boolean = false;

  getCompetencies (category: string) {
    return this.filteredCompetencies.filter(competency => competency.category === category);
  }


  // Method to filter competencies based on the 'showCertifiedOnly' toggle state
  filterCompetencies (): void {
    if (this.showCertifiedOnly) {
      // Filter competencies to only show certified ones
      this.filteredCompetencies = this.competencies.filter(c => c.certification !== '');
    } else {
      // Show all competencies
      this.filteredCompetencies = [...this.competencies];
    }
  }

  onCardClick (category: any, competency: any) {
    // Toggle description visibility
    this.showDescription = !this.showDescription;
    this.selectedCompetency = competency;
    this.selectedCategory = category;

  }


  closeModal () {
    // Close the modal by resetting selectedCompetency
    this.showDescription = false;
    this.selectedCompetency = null;
    this.selectedCategory = null;
  }


  // Close modal if clicked outside
  @HostListener('document:click', ['$event'])
  onDocumentClick (event: MouseEvent) {
    const modalElement = document.querySelector('.popin-modal');
    if (modalElement && !modalElement.contains(event.target as Node)) {
      this.closeModal();
    }
  }

  private openCompetencyById (id: string): void {
    const competency = this.competencies.find(c => c.title === id);
    if (competency) {
      this.onCardClick(competency.category, competency);
    }
  }
  
}
