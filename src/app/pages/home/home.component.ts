import { Component, OnInit } from '@angular/core';
import { PreloadImagesService } from '../../services/preload-images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(
    private preloadImagesService: PreloadImagesService
  ) { }

  sections = [
    { title: 'Mes compétences', description: 'Découvrez mes compétences plus en détail', link: '/mes-competences' },
    { title: 'Mes projets', description: 'Découvrez mes projets et réalisations', link: '/projets' },
    { title: 'Accomplissements', description: 'Mes accomplissements, publications et interventions', link: '/achievements' },
    { title: 'Ma bibliothèque', description: 'Mes lectures professionnelles et sources d\'inspiration', link: '/library' },
    { title: 'Contact', description: 'Contactez-moi via le formulaire de contact', link: '/contact' },
  ];


  ngOnInit (): void {

    // Preload image for the home page
    this.preloadImagesService.preloadImages(["AUBERTAlexandre.jpg"]);

  }

}
